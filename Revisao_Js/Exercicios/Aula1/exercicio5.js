/* EXERCICIO 5 */
// transforme a função comum em uma arrow function
function multiplicacao(n1, n2, ...numeros) {
  let acimaDeDois = 1;
  if (numeros.length > 0) {
    acimaDeDois = numeros.reduce((acc, atual) => acc * atual);
  }
  return n1 * n2 * acimaDeDois;
}
multiplicacao(1, 2, 3, 4, 5); // retorna 120
