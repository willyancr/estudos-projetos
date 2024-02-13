const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');

btnMobile?.addEventListener('pointerdown', toggleMenu);

function toggleMenu() {
  if (nav) {
    nav.classList.toggle('active');
    const isOpen = nav.classList.contains('active');
    btnMobile?.setAttribute(
      'aria-label',
      isOpen ? 'Fechar menu' : 'Abrir menu',
    );
    btnMobile?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
}
