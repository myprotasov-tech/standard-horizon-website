
(function(){
 const root=document.querySelector('.hx-details');if(!root)return;
 const tabs=[...root.querySelectorAll('[role="tab"]')];
 const panels=[...root.querySelectorAll('[role="tabpanel"]')];
 function activate(id,updateHash){
  if(!panels.some(p=>p.id===id))return;
  tabs.forEach(t=>{let active=t.getAttribute('aria-controls')===id;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1});
  panels.forEach(p=>{p.hidden=p.id!==id});
  if(updateHash)history.replaceState(null,'','#'+id);
 }
 tabs.forEach((t,i)=>{
  t.addEventListener('click',e=>{e.preventDefault();activate(t.getAttribute('aria-controls'),true)});
  t.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();let n=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[n].focus();activate(tabs[n].getAttribute('aria-controls'),true)});
 });
 activate(location.hash.slice(1)||'about',false);
 window.addEventListener('hashchange',()=>activate(location.hash.slice(1)||'about',false));
})();

