// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImage = document.querySelector('img');
console.log(firstImage.offsetTop);

// Retorne a soma da largura de todas as imagens
function sumImages() {
    const images = document.querySelectorAll('img');
    let soma = 0;
    images.forEach((image) => {
        soma += image.offsetWidth;
    });
    console.log(soma);
}
window.onload = function() {
    sumImages();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) => {
    let linkWidth = link.offsetWidth;
    let linkHeight = link.offsetHeight;

    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log('Estão no tamanho adequado');
    } else {
        console.log('Não estão no tamanho adequado');
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const isMobile = window.matchMedia('(max-width: 720px)').matches;

if (isMobile) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
    console.log(menu.className);
}