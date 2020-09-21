// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou');
    }
}

function Pessoa(name, age) {
    this.name = name;
    this.age = age;
    this.andar = function() {
        console.log(this.name + ' andou');
    }
}

const eu = new Pessoa('Gustavo', 21);
eu.andar();

// Crie 3 pessoas, 
// João - 20 anos,
// Maria - 25 anos, 
// Bruno - 15 anos
const joao = new Pessoa('João', 20);
joao.andar();
const maria = new Pessoa('Maria', 25);
maria.andar();
const bruno = new Pessoa('Bruno', 15);
bruno.andar();

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selector) {
    this.elements = document.querySelectorAll(selector);

    this.addClass = function(classe) {
        this.elements.forEach((element) => {
            element.classList.add(classe)
        });
    }
    this.removeClass = function(classe) {
        this.elements.forEach((element) => {
            element.classList.remove(classe)
        });
    }
}

const li = new Dom('li');
li.addClass('peixe');
li.removeClass('ativo');
li.removeClass('peixe');

console.log(li.elements);


class Dom2 {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
    }

    addClass = function (classe) {
        this.elements.forEach((element) => {
            element.classList.add(classe);
        });
    };
    removeClass = function (classe) {
        this.elements.forEach((element) => {
            element.classList.remove(classe);
        });
    };
}

const obj2 = new Dom2('ul');
obj2.addClass('gato');
obj2.removeClass('gato');