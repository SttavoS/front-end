// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objCursos = arrayCursos.map((curso) => {
    const title = curso.querySelector('h1').innerText;
    const description = curso.querySelector('p').innerText;
    const classes = curso.querySelector('.aulas').innerText;
    const hours = curso.querySelector('.horas').innerText;

    return {
        title,
        description,
        classes,
        hours,
    }
});

console.log(objCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaioresQueCem = numeros.filter((numero) => {
    return numero > 100;
})

console.log(numerosMaioresQueCem);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some((instrumento) => {
    return instrumento === 'Baixo';
});

console.log(temBaixo);


// Retorne o valor total das compras
const compras = [
{
    item: 'Banana',
    preco: 'R$ 4,99'
},
{
    item: 'Ovo',
    preco: 'R$ 2,99'
},
{
    item: 'Carne',
    preco: 'R$ 25,49'
},
{
    item: 'Refrigerante',
    preco: 'R$ 5,35'
},
{
    item: 'Quejo',
    preco: 'R$ 10,60'
}
]

let soma = 0;
const valorTotal = compras.reduce((valor, compra) => {
    const cleanNumber = +compra.preco.replace(',', '.').replace('R$ ', '');
    return valor + cleanNumber;
}, 0);

console.log(valorTotal);