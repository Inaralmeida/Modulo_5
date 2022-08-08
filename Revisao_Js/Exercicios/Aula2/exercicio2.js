/* EXERCICIO 2  - Destructuring */

// Acessar todos os itens do array, exceto o terceiro
//Se atentar caso haja necessidade de renomear algo

const disciplinas = [
  "Matemática",
  "Física",
  "Química",
  "Língua Portuguesa",
  "Biologia",
];

const [dic1, dic2, dic3, dic4, dic5] = disciplinas;

console.log(dic1);
console.log(dic5);
