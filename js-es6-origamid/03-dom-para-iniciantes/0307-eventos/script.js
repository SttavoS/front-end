// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]');

function handleLinks(event) {
    event.preventDefault();
    links.forEach((link) => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
}

links.forEach((link) => {
    link.addEventListener('click', handleLinks);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *');

function handleClick(event) {
    event.preventDefault();
    console.log(event.target);
}

allElements.forEach((element) => {
    element.addEventListener('click', handleClick);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const allElements = document.querySelectorAll('body *');

function handleClick(event) {
    event.preventDefault();
    event.target.remove();
}

allElements.forEach((element) => {
    element.addEventListener('click', handleClick);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleKeyPressT(event) {
    if (event.key === 't') {
        document.documentElement.classList.toggle('textomaior');
    }
}

window.addEventListener('keydown', handleKeyPressT);
