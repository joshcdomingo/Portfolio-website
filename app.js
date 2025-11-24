// Reveal containers on scroll
const containers = document.querySelectorAll('.container');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });
containers.forEach(c => observer.observe(c));

// Active nav highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.tab');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 150;
    if (scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => link.classList.remove('active'));
  navLinks.forEach(link => {
    if (link.getAttribute('href') === '#' + current)
      link.classList.add('active');
  });
});

// Star background animation
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2,
    d: Math.random() * 0.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.shadowBlur = 4;
  ctx.shadowColor = "#fff";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

function animateStars() {
  stars.forEach(s => {
    s.y += 0.15;
    if (s.y > canvas.height) s.y = 0;
  });
  drawStars();
  requestAnimationFrame(animateStars);
}
animateStars();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
