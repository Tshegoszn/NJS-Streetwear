// SCROLL REVEAL

ScrollReveal().reveal('.hero-content', {
  distance:'60px',
  duration:1800,
  delay:200,
  origin:'bottom'
});

ScrollReveal().reveal('.collection-header', {
  distance:'60px',
  duration:1800,
  delay:200,
  origin:'bottom'
});

ScrollReveal().reveal('.product-card', {
  distance:'60px',
  duration:1800,
  delay:200,
  interval:200,
  origin:'bottom'
});

ScrollReveal().reveal('.brand-section', {
  distance:'60px',
  duration:1800,
  origin:'bottom'
});

ScrollReveal().reveal('.editorial-image', {
  distance:'80px',
  duration:2000,
  origin:'left'
});

ScrollReveal().reveal('.editorial-content', {
  distance:'80px',
  duration:2000,
  origin:'right'
});

ScrollReveal().reveal('.drops-header', {
  distance:'60px',
  duration:1800,
  origin:'bottom'
});

ScrollReveal().reveal('.drop-large', {
  distance:'60px',
  duration:1800,
  origin:'left'
});

ScrollReveal().reveal('.drop-card', {
  distance:'60px',
  duration:1800,
  interval:200,
  origin:'right'
});

ScrollReveal().reveal('.newsletter', {
  distance:'60px',
  duration:1800,
  origin:'bottom'
});

ScrollReveal().reveal('.footer', {
  distance:'60px',
  duration:1800,
  origin:'bottom'
});



// CURSOR GLOW

const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {

  glow.style.left = e.clientX + 'px';

  glow.style.top = e.clientY + 'px';

});

// NAVBAR SCROLL EFFECT

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){

    navbar.style.background = 'rgba(0,0,0,0.75)';

  }else{

    navbar.style.background = 'rgba(0,0,0,0.15)';

  }

});
// MOBILE MENU

const menuToggle = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

  navLinks.classList.toggle('active');

});