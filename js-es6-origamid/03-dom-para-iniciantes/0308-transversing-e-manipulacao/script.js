// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);

const copy = document.querySelector('.copy');
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const dt = document.querySelector('dl.faq-lista > dt');

console.log(dt);

// Selecione o DD referente ao primeiro DT
const dd = dt.nextElementSibling;

console.log(dd);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.outerHTML;