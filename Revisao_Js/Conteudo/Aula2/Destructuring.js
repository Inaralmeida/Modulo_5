//Exemplo  Array

const frutas = ["Banana", "Uva"];
const [fruta1, fruta2] = frutas;
// fruta1 = ‘Banana’
// fruta2 = ‘Uva’

//ou

const comidas = ["arroz", "Feijão", "alface", "Bife"];

const [carbo1, carbo2, fibras, proteina] = comidas;
console.log(carbo1);

//Exemplo  Objetos ---------------------------------------------------------

const { nome, sobrenome1 } = { nome: "Gregório", sobrenome: "Silva" };
// nome1 = ‘Gregório’
// sobrenome1 = ‘Silva’
console.log("nome1", nome);
//ou

const pessoa = {
  nome: "Irineu",
  sobrenome: "Você não sabe nem eu",
};

const { nome: nome2, sobrenome2 } = pessoa;
console.log("nome2", nome2);
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
    endereco: { logradouro },
  },
  produto: { nome: nomeProduto },
} = compra;
console.log(logradouro, nomeProduto);
//Exemplo Objetos com array --------------------------------------------

const resilia = {
  empresa: "Resilia",
  facilitadores: [
    { nome: "Inara", frente: "Tech" },
    { nome: "Anna", frente: "Soft" },
    { nome: "Thom", frente: "Soft" },
    { nome: "Kassi", frente: "Tech" },
  ],
};

const {
  empresa,
  facilitadores: [{ nome: facilitador1 }, , { nome: facilitador2 }],
} = resilia;
console.log(empresa, facilitador1, facilitador2);
