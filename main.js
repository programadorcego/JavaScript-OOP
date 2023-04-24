/*
Ao executar um código JavaScript, diferentes erros podem ocorrer.
Os erros podem ser erros de codificação cometidos pelo programador, erros devidos a entrada incorreta e outras coisas imprevisíveis.
Para lidarmos com erros no JavaScript, podemos utilizar o bloco try/catch.
A instrução try permite que você defina um bloco de código para testar erros enquanto está sendo executado.
A instrução catch permite definir um bloco de código a ser executado, caso ocorra um erro no bloco try.
As instruções JavaScript try e catch vêm em pares.
*/

function funcao(){
	return "Olá, mundo!";
}

try {
	if(typeof funcao === "undefined") throw "A função funcao não está definida!";
	
	console.log(funcao());
} catch(err){
	console.log(err);
}