/*
Escreva uma função que receba um array de números como parâmetro e retorne um objeto com a soma e a média de todos os números.
*/


const numeros = [1, 2, 3, 4, 5, 6];

function obterSomaMedia(arr)
{
	const soma = arr.reduce((total, n) => total + n);
	const media = soma / arr.length;
	
	return {soma, media};
}

console.log(obterSomaMedia(numeros));