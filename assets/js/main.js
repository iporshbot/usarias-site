
const button = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
if (button && nav) {
  button.addEventListener('click', () => nav.classList.toggle('open'));
}
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => nav?.classList.remove('open'));
});
