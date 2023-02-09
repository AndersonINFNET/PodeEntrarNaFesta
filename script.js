//Solicita a idade do usuário e guarda na variável idadeStr no formato string é necessário converter depois
console.log("Solicitando a idade do sujeito. ");
let idadeStr = prompt("Qual é a idade no documento ? ");

console.log("Convertendo idade para um número inteiro" );
//converte idadeStr para um número inteiro e guarda na variável idade
let idade = parseInt(idadeStr);

console.log("A idade que o sujeito informou foi: " + idade);



if (idade >=18) {
  console.log("O sujeito é maior de idade");
  alert("Pode entrar!");
  
}else {
  console.log("O sujeito é menor de idade");
  alert("Vai pra casa");
}