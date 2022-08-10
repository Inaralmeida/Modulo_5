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

const [disciplina1, , disciplina3, disciplina4, disciplina5] = disciplinas;
console.log(disciplina1);
console.log(disciplina3);
console.log(disciplina4);
console.log(disciplina5);
