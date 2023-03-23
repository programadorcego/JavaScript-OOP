/*
Crie um objeto chamado carrinho_de_compras com as propriedades itens (um array) e precoTotal.
Preencha o array itens com objetos representando itens no carrinho de compras, com cada objeto contendo as propriedades nome e preco.
Use um loop forEach para exibir cada nome de item e preço no console.
Em seguida, use reduce para calcular o preço total de todos os itens no carrinho de compras.
*/

const carrinho_de_compras = {
  itens: [
    { nome: 'Camiseta Branca', preco: 39.90 },
    { nome: 'Calça Jeans', preco: 129.90 },
    { nome: 'Tênis Esportivo', preco: 259.90 },
    { nome: 'Jaqueta de Couro', preco: 599.90 },
    { nome: 'Óculos de Sol', preco: 189.90 },
    { nome: 'Relógio de Pulso', preco: 799.90 },
    { nome: 'Bolsa de Couro', preco: 349.90 },
    { nome: 'Fones de Ouvido Sem Fio', preco: 199.90 },
    { nome: 'Smartwatch', preco: 899.90 },
    { nome: 'Notebook', preco: 4599.90 },
  ],
  precoTotal: 0,
};

carrinho_de_compras.itens.forEach(item => console.log(`Nome: ${item.nome} Preço: ${item.preco}`));

carrinho_de_compras.precoTotal = carrinho_de_compras.itens.reduce((total, item) => total + item.preco, carrinho_de_compras.precoTotal);
console.log(carrinho_de_compras.precoTotal);