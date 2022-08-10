function trocaCor(nomeDaCor, id) {
  let cor = "";
  switch (nomeDaCor) {
    case "amarelo":
      cor = "#ffb200";
      break;
    case "vermelho":
      cor = "#ff0000";
      break;
    case "azul":
      cor = "#0ffff0";
      break;
    default:
      cor = "tomato";
  }

  console.log(cor);
  return () => {
    const item = document.getElementById(id);
    item.style.color = cor;
  };
}

const amarelo = trocaCor("amarelo", "texto1");
amarelo();

const vermelho = trocaCor("vermelho", "texto2");
vermelho();
