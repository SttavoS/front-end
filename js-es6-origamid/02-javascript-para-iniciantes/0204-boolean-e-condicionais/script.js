// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 21;
var idadeParente = 21;

if (minhaIdade > idadeParente) {
  console.log('É maior');
} else if (minhaIdade == idadeParente) {
  console.log('É igual');
} else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('A população do Brasil é maior');
} else if (brasil === china) {
  console.log('Ambos tem a mesma população');
} else {
  console.log('A população da China é maior');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
// Cão