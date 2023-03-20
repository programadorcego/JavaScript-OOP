/*
O método `sort()` é usado para ordenar os elementos de um array e retorna o array ordenado.
A ordem de classificação padrão é baseada em pontos de código Unicode de cadeia de caracteres, o que significa que o método de classificação classifica os elementos em ordem alfabética por padrão.

array.sort(compareFunction)

1: compareFunction - Opcional. Uma função que define uma ordem de classificação.
A função deve retornar um valor negativo, zero ou positivo, dependendo dos argumentos.
*/

/*const frutas = ['banana', 'maçã', 'laranja', 'abacaxi'];
frutas.sort();
frutas.reverse();
console.log(frutas);*/

const numeros = [5, 9, 2, 7, 1];
numeros.sort((a, b) => a - b);
console.log(numeros);