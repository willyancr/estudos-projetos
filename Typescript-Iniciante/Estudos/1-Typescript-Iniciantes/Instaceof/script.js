"use strict";
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace('http://', 'https://');
}
//Esse código verifica se a variável link é uma instância de HTMLAnchorElement, que é o tipo de elemento usado para representar links em HTML. Se link for de fato um elemento HTMLAnchorElement, então o código atribui a URL 'https://www.origamid.com' ao atributo href desse elemento, redirecionando o link para o site 'https://www.origamid.com'.
