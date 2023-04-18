/*
Classes são modelos de códigos para criar objetos.
No JavaScript,criamos uma classe com a palavra reservada class. 
*/

class Pessoa {
	constructor(nome, sobrenome, idade){
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.idade = idade;
	}
	
	cumprimentar(){
		return `Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`;
	}
}

const p1 = new Pessoa("Willian", "Pereira", 32)
console.log(p1.cumprimentar());