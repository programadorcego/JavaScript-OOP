/*
Os módulos no JavaScript permitem que você divida seu código em arquivos separados.
Isso facilita a manutenção de uma base de código.
Os módulos são importados de arquivos externos com a instrução import.
*/

import {soma, subtracao, multiplicacao, divisao} from "./matematica.js";

console.log(soma(3, 2));