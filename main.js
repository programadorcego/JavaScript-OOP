/*
Crie um array de objetos representando livros, com cada objeto contendo as propriedades `título`, `autor` e `ano`.
Use o método `map` para criar um novo array contendo apenas os títulos dos livros.
Em seguida, use o método `filter` para criar outro array contendo apenas os livros publicados após 1990.
*/

const livros = [
  {
    titulo: 'Harry Potter e a Pedra Filosofal',
    autor: 'J.K. Rowling',
    ano: 1997
  },
  {
    titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
    autor: 'J.R.R. Tolkien',
    ano: 1954
  },
  {
    titulo: 'A Menina que Roubava Livros',
    autor: 'Markus Zusak',
    ano: 2005
  },
  {
    titulo: '1984',
    autor: 'George Orwell',
    ano: 1949
  },
  {
    titulo: 'Orgulho e Preconceito',
    autor: 'Jane Austen',
    ano: 1813
  },
  {
    titulo: 'Cem Anos de Solidão',
    autor: 'Gabriel Garcia Marquez',
    ano: 1967
  },
  {
    titulo: 'A Insustentável Leveza do Ser',
    autor: 'Milan Kundera',
    ano: 1984
  },
  {
    titulo: 'A Revolução dos Bichos',
    autor: 'George Orwell',
    ano: 1945
  },
  {
    titulo: 'O Grande Gatsby',
    autor: 'F. Scott Fitzgerald',
    ano: 1925
  },
  {
    titulo: 'As Aventuras de Huckleberry Finn',
    autor: 'Mark Twain',
    ano: 1884
  }
];

const livros_nome = livros.map(l => l.titulo);
//console.log(livros_nome);

const livros_90 = livros.filter(l => l.ano >= 1990);
console.log(livros_90);