/*
Os tipos de dados primitivos do JavaScript também são objetos e possuem métodos e propriedades próprios.

Vejamos os métodos mais comuns do tipo string.
*/

let str = "Olá, Mundo!";

// Length: Retorna o núemro de caracteres da string.
//console.log(str.length);

// toUpperCase: Torna todos os caracteres maiúsculos
//console.log(str.toUpperCase());

// toLowerCase: Torna todos os caracteres minúsculos.
//console.log(str.toLowerCase());

// concat: Junta duas ou mais strings.
//console.log(str.concat(" Bom dia!", " Como vai?"));

// slice: Extrai uma porção de uma string e retorna uma nova string.
/*let part = str.slice(1, 5);
console.log(part);*/

// split: Converte uma string em um array a partir de um caractere separador.
let strArr = str.split(",");
console.log(strArr);