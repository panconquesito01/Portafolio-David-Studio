// main.js - Funciones JS personalizadas para el portafolio

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll para enlaces internos
  document.querySelectorAll('a.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Tema claro/oscuro y localStorage
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  if(themeToggle) themeToggle.checked = theme === 'dark';
  if(themeToggle) themeToggle.addEventListener('change', function() {
    theme = themeToggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
});

// Filtrado de proyectos
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tech = btn.dataset.tech;
    projectCards.forEach(card => {
      if(tech === 'all' || card.dataset.tech.includes(tech)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Contadores animados
function animateCounter(el, target) {
  let count = 0;
  const step = Math.ceil(target / 100);
  function update() {
    count += step;
    if(count >= target) {
      el.textContent = target;
    } else {
      el.textContent = count;
      requestAnimationFrame(update);
    }
  }
  update();
}
document.querySelectorAll('.counter').forEach(el => {
  const target = parseInt(el.dataset.target);
  if(target) animateCounter(el, target);
});

// Botón volver arriba
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
  if(window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
if(backToTop) backToTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// Animación de tipeo
function typeWriter(el, text, speed=80) {
  let i = 0;
  function typing() {
    if(i <= text.length) {
      el.textContent = text.substring(0, i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
const typeEl = document.querySelector('.typewriter');
if(typeEl) typeWriter(typeEl, typeEl.dataset.text);

// Parallax simple
window.addEventListener('scroll', function() {
  document.querySelectorAll('.parallax').forEach(el => {
    const y = window.scrollY * 0.5;
    el.style.backgroundPosition = `center ${y}px`;
  });
});

// Banner cookies (básico)
const cookieBanner = document.getElementById('cookieBanner');
if(cookieBanner) {
  const acceptBtn = document.getElementById('acceptCookies');
  if(acceptBtn) acceptBtn.addEventListener('click', function() {
    cookieBanner.style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
  });
  if(localStorage.getItem('cookiesAccepted') === 'true') {
    cookieBanner.style.display = 'none';
  }
}

// Envío de formulario de contacto usando Formspree y SweetAlert2
const contactForm = document.getElementById('contactForm');
if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch('https://formspree.io/f/mblyayya', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    })
    .then(response => {
      if(response.ok) {
        Swal.fire({
          title: '¡Mensaje enviado!',
          text: 'Gracias por contactarme. Te responderé pronto.',
          imageUrl: 'assets/images/pepefroghappy.png',
          imageWidth: 120,
          imageHeight: 120,
          confirmButtonColor: '#0d6efd',
          background: '#181a1b',
          color: '#fff',
          imageAlt: 'Pepe the Frog feliz'
        });
        contactForm.reset();
      } else {
        throw new Error('Error al enviar');
      }
    })
    .catch(() => {
      Swal.fire({
        title: 'No se pudo enviar',
        text: 'Ocurrió un error. Intenta de nuevo más tarde.',
        imageUrl: 'assets/images/pepefrogsad.png',
        imageWidth: 120,
        imageHeight: 120,
        confirmButtonColor: '#0d6efd',
        background: '#181a1b',
        color: '#fff',
        imageAlt: 'Pepe the Frog triste'
      });
    });
  });
}
