const nomes = ["Harry", "Hermione", "Ron"];
console.log("Array original: ", nomes);

//Adicionar no final
nomes.push("Minerva");
console.log("Add no final: ", nomes);

//Adicionar no Inicio
nomes.unshift("Albus");
console.log("Add no inicio: ", nomes);

//Retira do Final
nomes.pop();
console.log("Remove no final: ", nomes);

//Retira do Inicio
nomes.shift();
console.log("Remove no inicio: ", nomes);
