/*
O método `.map()` cria um novo array
a partir da chamada de uma função para cada elemento do array.

array.map(function(currentValue, index, arr))

1: function() - Obrigatório. É a função que executará em cada elemento.
2. currentValue: Obrigatório - o valor do elemento atual.
3. index: Opcional - o índice do elemento atual.
4. arr: opcional. O array do elemento atual.
*/

/*let numbers = [1, 2, 3, 4, 5];
let sqrNumbers = numbers.map(n => n ** 2);
console.log(sqrNumbers);*/

let words = ['olá', 'mundo', 'como', 'você', 'está'];
let upperWords = words.map(word => word.toUpperCase());
console.log(upperWords);