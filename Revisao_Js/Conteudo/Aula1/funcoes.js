/*As funções são blocos de construção essenciais no JavaScript
São um conjunto de instruções que executa uma tarefa ou calcula um valor, seu retorno pode ser existente ou vazio

OBS.: o fato do retorno ser vazio não significa que não houve uma tarefa sendo executada
 */

function soma(numero1, numero2) {
  return numero1 + numero2;
}
soma(56, 6); // 62

function adcTitulo() {
  const titulo = document.getElementByID("title");
  titulo.textContent = "Revisão JavaScript";
}
adcTitulo();
/* não houve um retorno explícito, mas fizemos a manipulação do DOM e alteramos o conteúdo de texto do elemento com ID title, logo uma tarefa foi executada */
