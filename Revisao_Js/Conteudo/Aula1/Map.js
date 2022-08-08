//invoca uma função callback passada por argumento e devolve um novo array como resultado, deixando o original intacto

const materialEscolar = ["Lápis", "Caderno", "Caneta", "Estojo"];

const novaLista = materialEscolar.map((item, index) => {
  return `Esse é o item numero: ${index + 1}- Nome do item: ${item}`;
});

console.log(novaLista);
// retorna uma lista enumerando todos os itens
// novaLista = [‘1 - Lápis’, ‘2 - Caderno’, ‘3 - Caneta’, ‘4 - Estojo’]

const numeros = [5, 6, 4, 95, 45, 26, 123, 27, 84, 69, 54, 26, 48, 15];

const vezesDez = numeros.map((numero) => numero * 10);
console.log(vezesDez);
// vezesDez = [50,60,40,950,450,260, 1230,270,840,690,540,260,480,150]
