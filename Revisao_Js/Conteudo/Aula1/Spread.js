//Utilizado para espalhar  os itens de arrays e objetos ou clonar objetos

//Espalhando array
function mesclaArrays(array1, array2) {
  console.log([...array1, ...array2]);
}

const comidas = ["Pizza", "Misto quente", "Pastel"];
const bebidas = ["Cerveja", "Café", "Refrigerante"];

// mesclaArrays(comidas, bebidas);

//Espalhando objeto
const comprador = {
  nome: "Irineu",
  cpf: 17117117171,
};

const carro = {
  modelo: "Uno",
  cor: "Prata",
};

function criaNotafiscal(comprador, carro) {
  console.log({ ...comprador, ...carro });
}

// criaNotafiscal(comprador, carro);

//Clonando Objeto

const gato1 = {
  nome: "Panqueca",
  sexo: "F",
  idade: 1,
  miar: function () {
    console.log(`${this.nome} Miou`);
  },
};

gato1.miar();

const gato2 = {
  // ...gato1
};
console.log(gato2);
gato2.nome = "Dora";
gato2.miar();
gato1.miar();
