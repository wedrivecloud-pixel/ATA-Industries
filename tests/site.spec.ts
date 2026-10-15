import {test,expect} from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

function discover(directory='dist', prefix='/'):string[] {
  return fs.readdirSync(directory,{withFileTypes:true}).flatMap(entry=>{
    if(entry.isDirectory()) return entry.name==='_astro'?[]:discover(path.join(directory,entry.name),prefix+entry.name+'/');
    return entry.name==='index.html'?[prefix]:entry.name==='404.html'?['/404.html']:[];
  });
}
const routes=discover();
const referenceMap=JSON.parse(fs.readFileSync('design-reference/ROUTE_MAP.json','utf8')) as {route:string,template:string}[];
const mapped = new Map(referenceMap.map(entry=>[entry.route,entry.template]));
mapped.delete('/legal/privacy/');mapped.set('/legal/','Legal');
const safeName=(route:string)=>route==='/'?'home':route.replace(/^\//,'').replace(/\/$/,'').replaceAll('/','--');

for(const width of [1440,390]) for(const route of routes) {
  test(`${width}px ${route}`,async({page})=>{
    await page.setViewportSize({width,height:1000});
    const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
    const response=await page.goto(route,{waitUntil:'networkidle'});
    expect(response?.status()).toBe(200);
    await page.evaluate(()=>document.fonts.ready);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page).toHaveTitle(/ATA Industries/);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content','noindex,nofollow');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href','https://ata-industries.example'+(route==='/404.html'?'/404/':route));
    expect(await page.locator('meta[name="description"]').getAttribute('content')).toBeTruthy();
    await expect(page.locator('sc-for,sc-if,dc-import,x-dc')).toHaveCount(0);
    expect(await page.locator('body').innerText()).not.toContain('{{');
    expect(errors).toEqual([]);
    const overflow=await page.evaluate(()=>({document:document.documentElement.scrollWidth,viewport:innerWidth,elements:Array.from(document.querySelectorAll('main *')).filter(el=>el.getBoundingClientRect().right>innerWidth+1).slice(0,8).map(el=>({tag:el.tagName,cls:el.className,text:el.textContent?.trim().slice(0,80)}))}));
    expect(overflow.document,JSON.stringify(overflow)).toBeLessThanOrEqual(width);
    await page.screenshot({path:`visual-results/${width}/${safeName(route)}.png`,fullPage:true});
    const template=mapped.get(route);
    if(template) {
      const actualPh=await page.locator('.ph').allTextContents();
      await page.goto('/___design/'+template+'.html',{waitUntil:'networkidle'});
      await page.evaluate(()=>document.fonts.ready);
      await expect(page.locator('.ph')).toHaveCount(actualPh.length);
      expect((await page.locator('.ph').allTextContents()).map(t=>t.trim().replace(/\s+/g,' '))).toEqual(actualPh.map(t=>t.trim().replace(/\s+/g,' ')));
      await page.screenshot({path:`visual-results/${width}/reference-${template}.png`,fullPage:true});
    }
  });
}

test('all internal destinations and fragments resolve',async({request})=>{
  const links=new Set<string>();
  for(const route of routes) {
    const response=await request.get(route);const source=await response.text();
    for(const match of source.matchAll(/href="(\/[^"\s]*)"/g))links.add(match[1].replaceAll('&amp;','&'));
  }
  for(const href of links) {
    const response=await request.get(href);expect(response.status(),href).toBe(200);
    const hash=new URL(href,'http://localhost').hash.slice(1);
    if(hash)expect(await response.text(),href).toContain(`id="${hash}"`);
  }
});

test('desktop mega menus, active state, Escape and outside click',async({page})=>{
  await page.setViewportSize({width:1440,height:1000});await page.goto('/services/');
  const button=page.locator('[data-menu-trigger="services"]');
  await expect(button).toHaveClass(/is-active/);
  await button.click();await expect(button).toHaveAttribute('aria-expanded','true');
  await expect(page.locator('#menu-services > .mega')).toBeVisible();
  await page.keyboard.press('Escape');await expect(button).toHaveAttribute('aria-expanded','false');
  await expect(button).toBeFocused();
  for(const key of ['services','industries','capabilities','about']) {
    await page.locator(`[data-menu-trigger="${key}"]`).click();
    await expect(page.locator(`[data-menu-panel="${key}"] > .mega`)).toBeVisible();
    await page.mouse.click(20,950);await expect(page.locator(`[data-menu-panel="${key}"] > .mega`)).toBeHidden();
  }
});

test('mobile menu is keyboard reachable and closes',async({page})=>{
  await page.setViewportSize({width:390,height:844});await page.goto('/');
  const menu=page.locator('[data-mobile-trigger]');
  await menu.click();await expect(menu).toHaveAttribute('aria-expanded','true');
  await expect(page.locator('#mobile-menu')).toBeVisible();
  await page.keyboard.press('Escape');await expect(menu).toHaveAttribute('aria-expanded','false');
  await expect(page.locator('#mobile-menu')).toBeHidden();
  await expect(menu).toBeFocused();
});

test('FAQ toggles, blog categories and load-more state',async({page})=>{
  await page.goto('/');const question=page.locator('[data-faq-toggle]').first();
  await expect(question).toHaveAttribute('aria-expanded','true');await question.click();await expect(question).toHaveAttribute('aria-expanded','false');
  await question.click();await expect(page.locator('[data-faq-answer]').first()).toBeVisible();
  await page.goto('/blog/');await page.getByRole('button',{name:'Company News',exact:true}).click();
  await expect(page.locator('[data-blog-post]:visible')).toHaveCount(2);
  await page.getByRole('button',{name:'All',exact:true}).click();await expect(page.locator('[data-blog-post]:visible')).toHaveCount(10);
  await expect(page.getByRole('button',{name:'All articles loaded'})).toBeDisabled();
});

test('equipment tabs and facility zones respond to keyboard',async({page})=>{
  await page.goto('/equipment/');const tabs=page.locator('[data-equipment-tab]');
  await tabs.nth(1).click();await expect(page.locator('#forming')).toBeVisible();await expect(page.locator('#cutting')).toBeHidden();
  await page.keyboard.press('ArrowRight');await expect(tabs.nth(2)).toBeFocused();await expect(page.locator('#machining')).toBeVisible();
  await page.goto('/facility/');const zone=page.locator('[data-facility-zone]').first();await zone.click();await expect(zone).toHaveAttribute('aria-pressed','true');await page.keyboard.press('ArrowRight');await expect(page.locator('[data-facility-zone]').nth(1)).toHaveAttribute('aria-pressed','true');
});

test('quote stages validate and neither form fakes a submission',async({page})=>{
  await page.goto('/quote/');await page.locator('[data-step-next]').first().click();
  await expect(page.locator('#q-name')).toBeFocused();
  await page.getByLabel('Full name').fill('Alex Sample');await page.locator('#q-company').fill('Sample Co');await page.getByLabel('Work email').fill('alex@example.com');
  await page.locator('[data-step-next]').first().click();await expect(page.locator('#q-desc')).toBeFocused();
  await page.getByLabel('Project description').fill('Review a part drawing for this project.');await page.locator('[data-step-next]').nth(1).click();
  await expect(page.locator('[data-quote-step]').nth(2)).toBeFocused();
  await expect(page.getByRole('button',{name:'Submit quote request'})).toBeDisabled();await expect(page.locator('#q-files')).toBeDisabled();
  await expect(page.getByRole('status')).toContainText('Nothing is sent');
  await page.getByRole('button',{name:'Remove example file mount-bracket-rev-C.sldprt'}).click();await expect(page.getByText('mount-bracket-rev-C.sldprt',{exact:true})).toHaveCount(0);
  await page.goto('/careers/');await expect(page.getByRole('button',{name:'Submit application'})).toBeDisabled();await expect(page.locator('#c-resume')).toBeDisabled();
  await page.goto('/quote/thank-you/');await expect(page.getByText('Confirmation design preview', {exact:false})).toBeVisible();
});

test('static deployment configuration and indexing assets',async({request})=>{
  const config=JSON.parse(fs.readFileSync('wrangler.jsonc','utf8'));expect(config).toEqual({name:'ata-industries',compatibility_date:'2026-10-01',assets:{directory:'./dist',not_found_handling:'404-page'}});
  expect((await request.get('/robots.txt')).ok()).toBeTruthy();expect((await request.get('/sitemap-index.xml')).ok()).toBeTruthy();
  const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));expect(pkg.dependencies['@astrojs/cloudflare']).toBeUndefined();expect(pkg.dependencies.wrangler).toBeUndefined();expect(pkg.devDependencies.wrangler).toBeUndefined();
});
