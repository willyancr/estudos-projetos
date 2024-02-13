const links = document.querySelectorAll('.link');
//criar uma função que deve ser executada para cada elemento e modificar através da função o estilo da cor e border
function toggleLink(element: HTMLElement) {
  element.style.color = 'red';
  element.style.border = '1px solid red';
}

links.forEach((link) => {
  if (link instanceof HTMLElement) {
    toggleLink(link);
  }
});
