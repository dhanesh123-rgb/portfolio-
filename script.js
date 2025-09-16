// script.js — small interactivity
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Thanks — message simulated (no backend).';
  setTimeout(()=> status.textContent = '', 4000);
});

// Smooth scroll for nav links
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
