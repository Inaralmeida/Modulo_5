//Sempre use const para declarar objetos
const cachorro = {
  nome: "Zé",
  raca: "doguinho caramelo",
  latir: () => {
    console.log(`${this.nome} latiu`);
  },
  comer: () => {
    console.log(`${this.nome} comeu`);
  },
};

// Acessando Propriedades
console.log(cachorro.nome);

//alterando Propriedades
cachorro.nome = "Zacarias";
console.log(cachorro);

//Adicionando Propriedades
cachorro["idade"] = 3;
console.log(cachorro);
