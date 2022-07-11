//invoca uma função callback passada por argumento, utilizada como teste lógico e devolve um novo array como resultado, deixando o original intacto

const numeros = [720, 99, 23, 1024, 101, 428];
const numerosFiltrados = numeros.filter((item) => {
  return item > 100;
});
// numerosFiltrados = [720, 1024, 101, 428]

const gatosDaInara = [
  { nome: "Dora", sexo: "F" },
  { nome: "Tangerina", sexo: "M" },
  { nome: "Panqueca", sexo: "F" },
  { nome: "Gordinho", sexo: "M" },
  { nome: "Jaquatirica", sexo: "F" },
  { nome: "Maçaneta", sexo: "M" },
  { nome: "Faisca", sexo: "F" },
];

const gatas = gatosDaInara.filter((gato) => gato.sexo === "F");
console.log(gatas);
/*
gatas = [
  { nome: 'Dora', sexo: 'F' },
  { nome: 'Panqueca', sexo: 'F' },
  { nome: 'Jaquatirica', sexo: 'F' },
  { nome: 'Faisca', sexo: 'F' }
]
 */
const gatos = gatosDaInara.filter((gato) => gato.sexo === "M");
console.log(gatos);
/*
gatos = [
  { nome: 'Tangerina', sexo: 'M' },
  { nome: 'Gordinho', sexo: 'M' },
  { nome: 'Maçaneta', sexo: 'M' }
]
*/
