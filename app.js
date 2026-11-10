const cards = document.querySelectorAll('.link-card');

cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 70}ms`;
  card.classList.add('is-ready');
});

window.addEventListener('pageshow', () => {
  document.body.classList.add('is-loaded');
});
