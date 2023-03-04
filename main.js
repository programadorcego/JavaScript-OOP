/*
O método `.reduce()` executa uma função em cada elemento do array,
e então reduz o array a um único valor.

array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

1: function() - Obrigatório. É a função que executará em cada elemento.
2. total - Obrigatório. O initialValue ou o valor retornado anteriormente da função.
3. currentValue - Obrigatório. O valor do elemento atual.
4. currentIndex - Opcional. O índice do elemento atual.
5. arr - Opcional. O array ao qual o elemento atual pertence.
6. initialValue - Opcional. Um valor a ser passado para a função como valor inicial.
*/

/*let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce((total, n) => total + n, 0);
console.log(soma);*/

let palavras = ['Olá, ', 'mundo! ', 'Como ', 'você ', 'está?'];
let concatenado = palavras.reduce((total, p) => total + p);
console.log(concatenado);