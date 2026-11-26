(function(){
  'use strict';
  if(document.querySelector('.back-to-top'))return;
  const button=document.createElement('button');
  button.type='button';
  button.className='back-to-top';
  button.setAttribute('aria-label','Наверх');
  button.setAttribute('title','Наверх');
  button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(button);
  const update=()=>button.classList.toggle('is-visible',window.scrollY>120);
  window.addEventListener('scroll',update,{passive:true});
  window.addEventListener('pageshow',update);
  update();
  button.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
})();
