/*
Escreva uma função que receba um array de objetos como parâmetro com uma propriedade "nome" e retorna um array apenas com os nomes em ordem alfabética.
*/

const pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Pedro", idade: 40 },
  { nome: "Ana", idade: 20 },
  { nome: "Lucas", idade: 27 },
  { nome: "Bianca", idade: 18 },
  { nome: "Rafael", idade: 35 },
  { nome: "Julia", idade: 22 },
  { nome: "Eduardo", idade: 42 },
  { nome: "Mariana", idade: 29 }
];

function ordenarNomes(arr)
{
	return arr.map(obj => obj.nome).sort();
}

console.log(ordenarNomes(pessoas));