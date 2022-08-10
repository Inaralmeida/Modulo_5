/* EXERCICIO 3  - Destructuring */

//Acessar todos os itens dos dois objetos disponíveis
//Se atentar caso haja necessidade de renomear algo

const dadosCliente = {
  nome: "Fabio",
  idade: 45,
  endereco: {
    logradouro: "Rua das Palmeiras",
    numero: 42,
    bairro: "Barra da Tijuca",
    cidade: "Rio de Janeiro",
  },
  assinanteDesde: 2017,
};

const {
  nome,
  idade,
  endereco: { logradouro, numero, bairro, cidade },
} = dadosCliente;
console.log(nome, idade, logradouro, numero, bairro, cidade);
const vestimenta = {
  camisa: {
    listrada: true,
    cor: "Vermelha e branca",
    colecao: "Outono/Inverno 2019",
  },
  calca: {
    cor: "Azul escuro",
    colecao: "Primavera/Verão 2021",
  },
};

const {
  camisa: { listrada, cor: corCamisa, colecao: colecaoCamisa },
  calca: { cor: corCalca, colecao: colecaoCalca },
} = vestimenta;
console.log(listrada, corCamisa, colecaoCamisa);
console.log(corCalca, colecaoCalca);
