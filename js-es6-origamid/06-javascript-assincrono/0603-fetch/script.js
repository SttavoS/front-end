// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const cep = document.querySelector('#cep');
const btn = document.querySelector('#btnCep');
const cepResult = document.querySelector('.resultadoCep');

btn.addEventListener('click', handleClick);

function handleClick(event) {
	event.preventDefault();
	findCep(cep.value);
}

function findCep(cep) {
	fetch(`https://viacep.com.br/ws/${cep}/json/`)
	.then((response) => {
		return response.json()
	})
	.then((body) => {
		cepResult.innerHTML = `${body.logradouro} - ${body.bairro} | ${body.localidade} - ${body.uf}`
	});
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btc = document.querySelector('.btc');

function fetchBtc() {
	fetch('https://blockchain.info/ticker')
	.then(response => {
		return response.json();
	})
	.then(response => {
		btc.innerText = `O preço do bitcoin está ${response.BRL.symbol} ${response.BRL.buy.toString().replace('.', ',')}`
	})
}

setInterval(fetchBtc, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const joke = document.querySelector('.piada');
const avatar = document.querySelector('.norris');
const nextJoke = document.querySelector('.proxima');

nextJoke.addEventListener('click', () => {
	fetch('https://api.chucknorris.io/jokes/random')
	.then(response => {
		return response.json();
	})
	.then(body => {
		avatar.src = body.icon_url;
		joke.innerHTML = body.value;
	});
})
