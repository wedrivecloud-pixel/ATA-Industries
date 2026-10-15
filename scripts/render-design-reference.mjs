/** Test-only renderer for the supplied Claude Design export.
 * It evaluates only the committed local renderVals declarations inside an isolated
 * vm without filesystem/process/network bindings. It never ships to the Worker.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const sourceDir = path.resolve('design-reference/pages');
const outputDir = path.resolve('.visual-reference');
fs.mkdirSync(outputDir, {recursive:true});
const escape = value => String(value ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const lookup = (expression, scope) => {
  const name = expression.trim();
  if(name === 'true') return true;
  if(name === 'false') return false;
  return name.split('.').reduce((value, key) => value?.[key], scope);
};
function expand(markup, scope) {
  markup = markup.replace(/\s+hint-[\w-]+="[^"]*"/g,'');
  markup = markup.replace(/\s+onClick="{{[^"]*}}"/gi,'');
  const opening = markup.match(/<sc-(for|if)\b([^>]*)>/);
  if(opening) {
    const start = opening.index;
    const tags = /<sc-(?:for|if)\b[^>]*>|<\/sc-(?:for|if)>/g;
    tags.lastIndex = start + opening[0].length;
    let depth=1, closing;
    while(depth && (closing=tags.exec(markup))) depth += closing[0].startsWith('</') ? -1 : 1;
    if(depth) throw new Error('Unbalanced design loop');
    const inner=markup.slice(start+opening[0].length,closing.index);
    const attrs=opening[2];
    let result='';
    if(opening[1]==='for') {
      const list=attrs.match(/list="{{(.*?)}}"/)[1];
      const as=attrs.match(/as="(.*?)"/)[1];
      result=(lookup(list,scope)||[]).map(item=>expand(inner,{...scope,[as]:item})).join('');
    } else if(lookup(attrs.match(/value="{{(.*?)}}"/)[1],scope)) result=expand(inner,scope);
    return expand(markup.slice(0,start),scope)+result+expand(markup.slice(closing.index+closing[0].length),scope);
  }
  return markup.replace(/{{(.*?)}}/g,(_,expression)=>escape(lookup(expression,scope)));
}
function render(name,props={}) {
  const source=fs.readFileSync(path.join(sourceDir,`${name}.dc.html`),'utf8');
  const logic=source.match(/<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  let values={};
  if(logic) values=vm.runInNewContext(`class DCLogic {state={};props=${JSON.stringify(props)};setState(){} };${logic};new Component().renderVals()`,{}, {timeout:1000});
  let markup=source.split('<x-dc>')[1].split('</x-dc>')[0].replace(/<helmet>[\s\S]*?<\/helmet>/g,'').trim();
  markup=expand(markup,values);
  markup=markup.replace(/<dc-import name="(\w+)"([^>]*)><\/dc-import>/g,(_,child,attrs)=>{
    const p=Object.fromEntries([...attrs.matchAll(/(\w+)="([^"]*)"/g)].map(m=>[m[1],m[2]]));
    return render(child,p);
  });
  return markup;
}
const font='https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&amp;family=IBM+Plex+Mono:wght@400;500&amp;family=IBM+Plex+Sans:wght@400;500;600&amp;display=swap';
for(const filename of fs.readdirSync(sourceDir)) {
  if(filename.includes('-Mobile')||!filename.endsWith('.dc.html')) continue;
  const name=filename.replace('.dc.html','');
  const body=render(name,name==='Header'?{menu:'none'}:{});
  fs.writeFileSync(path.join(outputDir,`${name}.html`),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/___design/ata.css"><link rel="stylesheet" href="${font}"><style>body{margin:0}.chip[aria-pressed="true"]{background:#14181C;color:#fff;border-color:#14181C}</style></head><body>${body}</body></html>`);
}
fs.copyFileSync('design-reference/ata.css',path.join(outputDir,'ata.css'));
console.log('Rendered original reference templates for visual comparison.');
