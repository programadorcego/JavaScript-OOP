/*
O método `.forEach()` executa uma função em cada elemento do array,
no entanto, não retorna um novo array.

array.forEach(function(currentValue, index, arr))

1: function() - Obrigatório. É a função que executará em cada elemento.
2. currentValue: Obrigatório - o valor do elemento atual.
3. index: Opcional - o índice do elemento atual.
4. arr: opcional. O array do elemento atual.
*/

let numbers = [1, 2, 3, 4, 5];
//numbers.forEach(n => console.log(n));

/*let soma = 0;
numbers.forEach(n => soma += n);
console.log(soma);*/

let fatorial = 1;
numbers.forEach(n => fatorial *= n);
console.log(fatorial);