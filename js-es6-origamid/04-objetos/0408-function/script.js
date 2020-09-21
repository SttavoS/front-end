// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragraphs = document.querySelectorAll('p');

const sumParagraphs = Array.prototype.reduce.call(paragraphs, function(acumulator, item) {
    return acumulator + item.innerText.length;
}, 0);

console.log(sumParagraphs);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function createElement(tag, classe = '', content = '') {
    const element = document.createElement(tag);
    element.classList.add(classe);
    element.innerText = content;

    return element;
}

console.log(createElement('div', 'ativo', 'Literalment qualquer coisa'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const makeH1 = createElement.bind(null, 'h1', 'titulo');

console.log(makeH1('Curso de Javascript'));