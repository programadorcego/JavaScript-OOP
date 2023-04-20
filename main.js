/*
Herança é uma forma de compartilhar métodos e propriedades entre diferentes objetos.
No JavaScript, a herança é implementada através do conceito de protótipos.
Um protótipo é um objeto que contém propriedades e métodos que podem ser acessados por outros objetos.
Quando um objeto precisa de uma propriedade ou método que não está presente em si mesmo, ele procura no seu protótipo até encontrar o que precisa.
*/

class Pessoa {
	constructor(nome, idade){
		this.nome = nome;
		this.idade = idade;
	}
	
	cumprimentar(){
		console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
	}
}

class Estudante extends Pessoa {
	constructor(nome, idade, curso){
		super(nome, idade);
		this.curso = curso;
	}
	
	cumprimentar(){
		console.log(`Olá, meu nome é ${this.nome} e sou estudante do curso de ${this.curso}.`);
	}
}

const pessoa = new Pessoa("Willian", 32);
pessoa.cumprimentar();

const estudante = new Estudante(pessoa.nome, pessoa.idade, "Programação");
estudante.cumprimentar();