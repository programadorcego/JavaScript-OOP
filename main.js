/*
Há 3 formas nativas no JavaScript de se listar as propriedades de um objeto:

1. Loop for ... in
2. Object.keys(o)
3. Object.getOwnPropertyNames(o)
*/

let pessoa = {
	"nome": "Willian",
	"idade": 32,
	falar(){
		console.log(`${this.nome} está falando!`);
	},
};

// for...in
/*for(propriedade in pessoa){
	console.log(`${propriedade}: ${pessoa[propriedade]}`);
}*/

// Object.keys
//console.log(Object.keys(pessoa));

// Object.getOwnPropertyNames
console.log(Object.getOwnPropertyNames(pessoa));