// url para requisicao
const randomUserUrl = "https://randomuser.me/api/";

async function gerarUsuario() {
  //Buscando os dados da api e aguardando a chegada e salvamento na variavel response
  const response = await fetch(randomUserUrl);

  //A variavel response chegou como uma Promisse, precisamos aguardar o tratamento da Promisse e salvar o conteudo na variavel data
  const data = await response.json();

  //Agora os dados da API já chegaram, então salvamos o index 0 do array results em uma variavel
  const results = data.results[0];
  console.log(results);

  //Para completar o exercicio precisamos do primeiro nome do usuario e uma foto
  //Para acessar os dados usamos o destructuring
  const {
    name: { first: nome },
    picture: { large: foto },
  } = results;
  console.log(nome, foto);

  document.querySelector("#userPhoto").src = foto;
  document.querySelector("#name").innerText = nome;
}

gerarUsuario();

document.getElementById("changeUser").addEventListener("click", gerarUsuario);
