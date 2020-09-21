// Crie uma função para verificar se um valor é Truthy
function isTruthy(data) {
  return console.log(!!data);
}

isTruthy(5);
isTruthy(0);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(sides) {
  return sides * 4;
}

console.log(perimetro(8));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(name, surname) {
  return console.log(`${name} ${surname}`); 
}

let nomeCompleto = fullName('Gustavo', 'Schneider');

// Crie uma função que verifica se um número é par
function isPair(number) {
  var module = number % 2;
  if (module === 0) {
    return console.log('O número é par');
  } else {
    return console.log('O número é ímpar');
  }
}

isPair(5);
isPair(4);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(data) {
  return console.log(`O dado é do tipo ${typeof(data)}`);
}

tipo(4);
tipo('Texto qualquer');
tipo(true);
tipo({});

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', () => {
  return console.log('Gustavo Schneider');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`); 
}
function jaVisitei(paisesVisitados) {
  return console.log(`Já visitei ${paisesVisitados} do total de ${totalPaises} países`); 
}
precisoVisitar(20);
jaVisitei(20);