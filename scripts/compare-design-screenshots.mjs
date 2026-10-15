import fs from 'node:fs';
import sharp from 'sharp';
const mapping=JSON.parse(fs.readFileSync('design-reference/ROUTE_MAP.json','utf8'));
const rows=[];
for(const width of [1440,390]) for(const {route,template} of mapping){
 const name=route==='/'?'home':route.replace(/^\//,'').replace(/\/$/,'').replaceAll('/','--');
 const a=`visual-results/${width}/${name}.png`,b=`visual-results/${width}/reference-${template}.png`;
 if(!fs.existsSync(a)||!fs.existsSync(b))continue;
 const actual=await sharp(a).metadata(),reference=await sharp(b).metadata();
 let percent=null;
 if(actual.width===reference.width&&actual.height===reference.height){
  const x=await sharp(a).removeAlpha().raw().toBuffer(),y=await sharp(b).removeAlpha().raw().toBuffer();let count=0;
  for(let i=0;i<x.length;i+=3)if(Math.abs(x[i]-y[i])+Math.abs(x[i+1]-y[i+1])+Math.abs(x[i+2]-y[i+2])>12)count++;
  percent=+(count/(x.length/3)*100).toFixed(4);
 }
 rows.push({width,route,template,actual:[actual.width,actual.height],reference:[reference.width,reference.height],changedPixelsPercent:percent});
}
fs.writeFileSync('visual-results/comparison.json',JSON.stringify(rows,null,2));
console.log(JSON.stringify(rows,null,2));
