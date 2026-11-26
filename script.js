
const toggle=document.querySelector('.mobile-menu');const nav=document.querySelector('.nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});document.querySelectorAll('a[data-placeholder]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();alert('Контактные данные для дилерских заявок ещё не настроены.');}));

// Redirect legacy consultation links from the homepage to the unified contact form.
if (location.hash === '#contact' && /(?:^|\/)index\.html$|\/$/.test(location.pathname)) {
  location.replace('contact.html?topic=consultation');
}
