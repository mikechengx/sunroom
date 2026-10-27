import assert from 'node:assert/strict';
import test from 'node:test';
import { t, analysisText, translations } from '../src/i18n.js';
import { CATALOG } from '../src/catalog.js';
import { ALL_FINISHES } from '../src/finishes.js';
const han=/\p{Script=Han}/u;

test('all 40 catalog labels and descriptions translate without rewriting source data',()=>{
 const original=JSON.stringify(CATALOG);
 for(const item of CATALOG){assert(!han.test(t(item.label,'en')),item.label);assert(!han.test(t(item.description,'en')),item.description);assert.equal(t(item.label,'zh'),item.label);}
 assert.equal(CATALOG.length,40);assert.equal(JSON.stringify(CATALOG),original);
});
test('all furniture finish labels and groups have complete English translations',()=>{
 for(const finish of ALL_FINISHES){assert(!han.test(t(finish.label,'en')),finish.label);assert(!han.test(t(finish.group,'en')),finish.group);}
});
test('longest phrase matching keeps whole labels and export headings readable',()=>{
 assert.equal(t('家具预算 · 估算','en'),'Furniture estimate');
 assert.equal(t('纯白 · 烤漆板','en'),'Pure white · Lacquer');
 assert.equal(t('01-尺寸俯视','en'),'01-dimensioned-plan');
 assert.equal(t('名称,宽mm,深mm,高mm,底部离地mm,安装墙面,饰面,示意预算元','en'),'Name,Width mm,Depth mm,Height mm,Elevation mm,Mounting wall,Finish,Estimated cost CNY');
});
test('warnings translate templates while retaining authored names even if they equal UI vocabulary',()=>{
 const name='家具 书桌 项目 / custom';
 assert.equal(analysisText(name+' 部分超出房间，请调整位置','en'),name+' extends outside the room. Adjust its position.');
 assert.equal(analysisText(name+' 与 我的门 空间重叠','en'),name+' overlaps 我的门.');
 assert.equal(analysisText('已保存「'+name+'」','en'),'Saved “'+name+'”');
 assert.equal(analysisText(name+' 前方开合空间被 自己的柜子 占用','en'),'The opening space in front of '+name+' is occupied by 自己的柜子.');
 assert.equal(analysisText(name+' 与窗户位置重叠，请调整挂墙位置或离地高度','en'),name+' overlaps a window. Adjust wall position or elevation.');
 assert.equal(analysisText(name+' 部分超出房间，请调整位置','zh'),name+' 部分超出房间，请调整位置');
});
test('maintained dictionary contains no empty or untranslated English values',()=>{
 assert(Object.keys(translations).length>400);
 for(const [source,target]of Object.entries(translations)){assert(source);assert(target,source);assert(!han.test(target),source);}
});
