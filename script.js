// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const burger = document.getElementById('burger');
burger.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
const reveals = document.querySelectorAll('.reveal');
reveals.forEach((el, i) => {
  el.style.transitionDelay = `${i * 120}ms`;
  io.observe(el);
});

// Currency ticker
const currencies = ['USD','GBP','EUR','AUD','CAD','SGD','CHF','JPY','CNY','HKD','MYR','AED','SAR','QAR','BDT','NZD','SEK','NOK','DKK','PLN','CZK','HUF','TRY','BRL','IDR','ILS','PHP','RON'];
const track = document.getElementById('tickerTrack');
const buildTicker = () => currencies.map(c => `<div><span>◆</span>${c}</div>`).join('');
track.innerHTML = buildTicker() + buildTicker();
