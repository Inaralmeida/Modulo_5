//retorna o índice do item procurado, se não existir retorna -1

//Usando com array
const materialEscolar = ["Lápis", "Caderno", "Caneta", "Estojo"];

function procuraItem(array, item) {
  const indice = array.indexOf(item);
  console.log(indice);
}
procuraItem(materialEscolar, "Caderno"); // indice = 1

//Usando com string

function validaEmail(email) {
  if (email.indexOf("@") !== -1) {
    console.log("Email valido");
  } else {
    console.log("Email invalido");
  }
}
validaEmail("inara@resilia.com"); //Email valido
validaEmail("inararesilia.com"); //Email invalido
