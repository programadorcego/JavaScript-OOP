/*
O método `.filter()` crie um novo array preenchido com elementos que passam em um teste fornecido por uma função.

array.filter(function(currentValue, index, arr))

1: function() - Obrigatório. É a função que executará em cada elemento.
2. currentValue: Obrigatório - o valor do elemento atual.
3. index: Opcional - o índice do elemento atual.
4. arr: opcional. O array do elemento atual.
*/

/*let numeros = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = numeros.filter(n => n % 2 == 0);
console.log(pares);*/

let produtos = [
{nome: "maçã", categoria: "fruta"},
{nome: "cenoura", categoria: "vegetal"},
{nome: "manga", categoria: "fruta"},
{nome: "alface", categoria: "vegetal"},
];

let frutas = produtos.filter(p => p.categoria === "fruta");
console.log(frutas);