// Small, dependency-free enhancements. Safe to edit or delete.

document.getElementById('year').textContent = new Date().getFullYear();

// Prevent unfinished social placeholders from jumping to the top.
document.querySelectorAll('[data-placeholder-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.getAttribute('href') === '#') event.preventDefault();
  });
});

// Highlight the current section in the desktop sidebar navigation.
const navLinks = [...document.querySelectorAll('.section-nav a')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
  });
}, { rootMargin: '-20% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] });

sections.forEach((section) => observer.observe(section));
