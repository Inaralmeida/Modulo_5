//Utilizado quando não sabemos o numero de argumentos a ser recebido

function exibeLista(empresa, turma, ...facilitadores) {
  facilitadores.map((facilitador) => {
    console.log(facilitador, "Trabalha na empresa", empresa);
  });
}
exibeLista("Resilia", "Cinthia", "Aline", "Inara");

// exibe o nome da empresa (Resilia) e o nome de cada facilitador
