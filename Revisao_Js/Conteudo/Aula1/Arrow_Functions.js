/*A arrow function é uma função inicialmente anônima, mas que é declarada de forma diferente das funções que estamos acostumados
 */

//Uma linha só com parametro
const saudacao = (nome) => `Olá ${nome}`;
saudacao("João");

//Uma linha só sem parametro
const olaMundo = () => "Olá mundo";

//Uma linha só com + de um parametro
const soma = (num1, num2) => num1 + num2;

//Mais de uma linha
const somaDebugg = (num1, num2) => {
  console.log("Somando números!");
  return num1 + num2;
};
