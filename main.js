/*
Crie um array de objetos representando restaurantes, com cada objeto de restaurante contendo as propriedades nome, culinaria e avaliacao.
Use o método filter para criar um novo array contendo apenas os restaurantes com classificação 4 ou superior.
Em seguida, use map para criar outro array contendo apenas os nomes desses restaurantes altamente cotados.
*/

const restaurantes = [
  { nome: 'Restaurante A', culinaria: 'Italiana', avaliacao: 4.5 },
  { nome: 'Restaurante B', culinaria: 'Japonesa', avaliacao: 3.2 },
  { nome: 'Restaurante C', culinaria: 'Brasileira', avaliacao: 2.8 },
  { nome: 'Restaurante D', culinaria: 'Mexicana', avaliacao: 4.9 },
  { nome: 'Restaurante E', culinaria: 'Indiana', avaliacao: 3.5 },
  { nome: 'Restaurante F', culinaria: 'Francesa', avaliacao: 2.1 },
  { nome: 'Restaurante G', culinaria: 'Chinesa', avaliacao: 4.2 },
  { nome: 'Restaurante H', culinaria: 'Coreana', avaliacao: 3.9 },
  { nome: 'Restaurante I', culinaria: 'Portuguesa', avaliacao: 4.7 },
  { nome: 'Restaurante J', culinaria: 'Mediterrânea', avaliacao: 3.0 },
];

const restaurantes_avaliados = restaurantes.filter(r => r.avaliacao >= 4);
//console.log(restaurantes_avaliados);

const restaurantes_nomes = restaurantes_avaliados.map(r => r.nome);
console.log(restaurantes_nomes);