/* Dealer records: add verified partners here. Fields: name, city, region, address, phone, website, lat, lon. */
const dealers = [];
const search = document.getElementById('dealer-search');
const region = document.getElementById('dealer-region');
const results = document.getElementById('dealer-results');
const count = document.getElementById('dealer-count');
const mapEl = document.getElementById('dealers-map');
const regions = [...new Set(dealers.map(d => d.region).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'ru'));
regions.forEach(value => { const opt=document.createElement('option');opt.value=value;opt.textContent=value;region.append(opt); });
let map;
function render() {
 const q=search.value.trim().toLocaleLowerCase('ru');
 const filtered=dealers.filter(d=>(!region.value||d.region===region.value)&&(!q||[d.name,d.city,d.region].some(s=>(s||'').toLocaleLowerCase('ru').includes(q))));
 count.textContent=filtered.length+' '+(filtered.length%10===1&&filtered.length%100!==11?'компания':filtered.length%10>=2&&filtered.length%10<=4&&(filtered.length%100<12||filtered.length%100>14)?'компании':'компаний');
 results.replaceChildren();
 if(!filtered.length){const empty=document.createElement('div');empty.className='where-empty';const h=document.createElement('h4');h.textContent=dealers.length?'По вашему запросу компании не найдены':'Дилеры пока не добавлены';const p=document.createElement('p');p.textContent=dealers.length?'Попробуйте изменить параметры поиска.':'Сведения о дилерах появятся здесь после их подтверждения.';empty.append(h,p);results.append(empty);}
 filtered.forEach(d=>{const card=document.createElement('article');card.className='where-card';const h=document.createElement('h4');h.textContent=d.name;card.append(h);const p=document.createElement('p');p.textContent=[d.city,d.address].filter(Boolean).join(', ');card.append(p);if(d.phone){const tel=document.createElement('a');tel.href='tel:'+d.phone.replace(/[^+\\d]/g,'');tel.textContent=d.phone;card.append(tel);}if(d.website&&/^https:\/\//.test(d.website)){const web=document.createElement('p');const a=document.createElement('a');a.href=d.website;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Сайт компании';web.append(a);card.append(web);}if(map&&Number.isFinite(d.lat)&&Number.isFinite(d.lon)){const b=document.createElement('button');b.type='button';b.textContent='Показать на карте';b.addEventListener('click',()=>map.setCenter([d.lat,d.lon],13,{duration:250}));card.append(b);}results.append(card);});
}
search.addEventListener('input',render);region.addEventListener('change',render);render();
/* Yandex Maps API can be enabled after verified dealers and an API key are available. No third-party map scripts load while the directory is empty. */
