
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');

btnMobile?.addEventListener('click', toggleMenu)

function toggleMenu() {
  nav?.classList.toggle('active')
  btnMobile?.setAttribute('aria-label', nav?.classList.contains('active') ? 'Fechar menu' : 'Abrir menu')
  btnMobile?.setAttribute('aria-expanded', nav?.classList.contains('active') ? 'true' : 'false')
}