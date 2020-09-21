// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Pessoa.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

const gustavo = new Pessoa('Gustavo', 'Schneider', 21);
console.log(gustavo.fullName());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined

console.log(
    li.constructor.name,
    li.click.constructor.name,
    li.innerText.constructor.name,
    li.value.constructor.name,
    li.hidden.constructor.name,
    li.offsetLeft.constructor.name,
    li.click(),
);

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
