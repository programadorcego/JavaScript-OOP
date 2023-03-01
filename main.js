/*
Os tipos de dados primitivos do JavaScript também são objetos e possuem métodos e propriedades próprios.

Vejamos os métodos mais comuns do tipo array.
*/

let frutas = ["laranja", "maçã", "morango", "abacaxi"];

// length: exibe a quantidade de itens no array.
//console.log(frutas.length);

// toString: Converte um array para uma string com elementos separados por vírgula.
//console.log(frutas.toString());

// pop: Remove o último item do array.
/*frutas.pop();
console.log(frutas);*/

// push: adiciona um ou mais itens no final do array.
/*frutas.push("banana", "goiaba");
console.log(frutas);*/

// shift: remove o primeiro item do array.
/*frutas.shift();
console.log(frutas);*/

// unshift: adiciona um ou mais itens ao array.
/*frutas.unshift("banana", "goiaba");
console.log(frutas);*/

// concat: junta dois ou mais arrays.
/*frutas2 = ["uva", "melancia", "manga"];
frutas = frutas.concat(frutas2);
console.log(frutas);*/

// splice: adiciona ou remove um item de um array a partir de um index.
/*frutas.splice(1, 2, "manga");
console.log(frutas);*/

// slice: retorna um novo array com uma porção do array original.
frutas2 = frutas.slice(1);
console.log(frutas2);