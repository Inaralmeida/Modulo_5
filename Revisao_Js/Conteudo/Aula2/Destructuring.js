//Exemplo  Array

const frutas = ["Banana", "Uva"];

const [fruta1, fruta2] = frutas;
console.log("fruta1", fruta1);
console.log("fruta2", fruta2);

//ou

const comidas = ["arroz", "Feijão", "alface", "Bife"];
const [comida1, comida2, comida3, comida4] = comidas;
console.log(comida1, comida4);
//Exemplo  Objetos ---------------------------------------------------------

const pessoa = {
  nome: "Irineu",
  sobrenome: "Você não sabe nem eu",
};

// const { nome, sobrenome } = pessoa;
// console.log(nome, sobrenome);

//Exemplo Objetos complexos---------------------------------------------

const compra = {
  comprador: {
    nome: "Zé",
    cpf: 17117117171,
    endereco: {
      logradouro: "Algum lugar",
      numero: 8,
      bairro: "nunca nem vi",
      cidade: "De ninguem ",
    },
  },
  produto: {
    nome: "café",
    preco: 23,
    sku: 2145786548,
  },
};
const {
  comprador: {
    nome,
    endereco: { logradouro },
  },
  produto: { nome: nomeDoProduto },
} = compra;
console.log(nome, logradouro, nomeDoProduto);
//Exemplo Objetos com array --------------------------------------------

const resilia = {
  empresa: "Resilia",
  facilitadores: [
    { nome: "Inara", frente: "Tech" },
    { nome: "Aline", frente: "Soft" },
    { nome: "Thom", frente: "Soft" },
    { nome: "Cinthia", frente: "Tech" },
  ],
};

const {
  empresa,
  facilitadores: [, facilitadora2, , facilitadora3],
} = resilia;
console.log(facilitadora2, facilitadora3);
