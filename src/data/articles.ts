import {designData} from './Blog';
export interface Article { title:string; cat:string; slug:string; introduction?:string }
// The home template supplies these three additional cards; no article bodies
// were exported, so their detail routes retain explicit content placeholders.
export const homeArticles:Article[] = [
 {title:'How to prepare SolidWorks files for a faster quote',cat:'[Category]',slug:'how-to-prepare-solidworks-files-for-a-faster-quote',introduction:'What to include in your package so it can be priced on the first pass.'},
 {title:'Fiber laser vs. plasma: choosing the right cut for your part',cat:'[Category]',slug:'fiber-laser-vs-plasma-choosing-the-right-cut-for-your-part',introduction:'Edge quality, tolerances and cost trade-offs for sheet and plate.'},
 {title:'Planning for rush orders without disrupting production',cat:'[Category]',slug:'planning-for-rush-orders-without-disrupting-production',introduction:'How reserved capacity keeps urgent jobs from bumping scheduled work.'}
];
export const articles:Article[] = [...designData.posts,...homeArticles];
