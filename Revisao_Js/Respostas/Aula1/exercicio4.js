/* EXERCICIO 4 - Spread */
// faça um clone do objeto cafe
const cafe = {
  origem: "Cerrado brasileiro",
  torra: "media",
  moagem: "media fina",
};

const clone = { ...cafe };

cafe.torra = "clara";

// ao exibir clone, torra deve ser 'media' e não 'clara', o que evidencia que foi, de fato, clonado
console.log(clone.torra);
