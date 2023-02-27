/*
Programação Orientada a Objetos é um paradigma de programação baseado no conceito de "objetos".

Objetos são instâncias de classes e são usados para modelar objetos do mundo real e seu comportamento.
A Orientação a Objeto fornece uma maneira de organizar e estruturar o código, tornando-o mais fácil de entender, manter e escalar.

Na Orientação a Objeto, os objetos têm propriedades (também conhecidas como atributos) 
e métodos (também conhecidos como funções).

As propriedades descrevem o estado de um objeto, enquanto os métodos descrevem seu comportamento.

Há 4 formas de se criar um objeto em JavaScript:
1. Object Constructor: new Object()
2. Constructor Functions: new function_name();
3. Objeto literal: {"key": "value"
4. Classes: new ClassName()
*/

// Object Constructor
/*let pessoa = new Object();
pessoa.nome = "Willian";
pessoa.idade = 32;
pessoa.falar = function(){
	console.log(`${this.nome} está falando!`);
};

pessoa.falar();*/

// Function constructor
/*function PessoaObjeto()
{
	this.nome = "Willian";
	this.idade = 32;
	this.falar = function(){
		console.log(`${this.nome} está falando!`);
	};
}

let pessoa = new PessoaObjeto();*/

// Object Literal
let pessoa = {
	"nome": "Willian",
	"idade": 32,
	"falar": function(){
		console.log(`${this.nome} está falando!`);
	},
};

pessoa.falar();
pessoa["falar"]();