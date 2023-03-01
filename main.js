/*
Os tipos de dados primitivos do JavaScript também são objetos e possuem métodos e propriedades próprios.

Vejamos os métodos mais comuns do tipo number.
*/

let n = 9.85379203

// toString: converte um número para uma string
//console.log(typeof n.toString());

// toFixed: formata um número, especificando o número de dígitos a serem exibidos após o ponto decimal
//console.log(n.toFixed(2));

// toPrecision: formata um número para uma precisão especificada.
//console.log(n.toPrecision(2));

// Os métodos a seguir não são métodos do objeto number, mas métodos globais do JavaScript.

// Number: converte um valor para o tipo number.
//console.log(Number(true));
//console.log(Number(false));
//console.log(typeof Number("10"));
//console.log(Number("will"));

// parseInt: converte um valor para o tipo inteiro.
//console.log(parseInt("10.5"));

// parseFloat: converte um número para o tipo float.
let n1 = "1,50";
let n2 = "2,50";
let r = parseFloat(n1.replace(",", ".")) + parseFloat(n2.replace(",", "."));
console.log(r.toFixed(2).toString().replace(".", ","));