// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
const n = priceNumber('R$ 99,99');
console.log('Function Expression: ' + n);

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function() {
	const n = priceNumber('R$ 99,99');
	function priceNumber(n) {
		return +n.replace('R$', '').replace(',', '.');
	}
	console.log('IIFE: ' + n);
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
