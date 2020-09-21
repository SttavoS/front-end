// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
let total = 0;

transacoes.forEach((transacao) => {
    const cleanNumber = +transacao.valor.replace('R$ ', '');

    if (transacao.descricao.slice(0, 4) == 'Taxa') {
        taxaTotal += cleanNumber;
    } else {
        recebimentoTotal += cleanNumber;
    }
});
total = recebimentoTotal - taxaTotal;
console.log(total, recebimentoTotal, taxaTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesArr = transportes.split(';');

// Substitua todos os span's por a's
let html = `<ul>
            <li><span>Sobre</span></li>
            <li><span>Produtos</span></li>
            <li><span>Contato</span></li>
            </ul>`;

html = html.split('span').join('a');
console.log(html);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.slice(-1));

// Retorne o total de taxas
let itemCount = 0
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

transacoes2.forEach((item) => {
    item = item.toLowerCase().trim();

    if (item.includes('taxa')) {
        itemCount++;
    }
});

console.log(`${itemCount} ocorrências`);