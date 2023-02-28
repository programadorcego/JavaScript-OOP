/*
Propriedades enumeráveis de um objeto são propriedades que podem ser iteradas usando um loop `for...in`,
ou acessadas usando o método `Object.keys()`.

Por padrão, todas as propriedades que são adicionadas a um objeto usando objetos literais são enumeráveis.

No entanto, é possível criar propriedades não enumeráveis usando o método `Object.defineProperty()` com o descritor de propriedade `enumerable` definido como `false`.

As propriedades não enumeráveis ainda podem ser acessadas usando a sintaxe regular de acesso à propriedade,
mas elas não aparecerão nos resultados dos métodos de enumeração como `for...in` ou `Object.keys()`.
*/

let obj = {
	'enumerableProp': 'enumerável',
};

Object.defineProperty(obj, 'norEnumerableProp', {
	value: 'não enumerável',
	enumerable: false,
});

console.log(Object.keys(obj));