// Criando função com retorno
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`; // nada a baixo de return é executado.
  return; // não executavel!
  return;
}

// Declarando variáveis para a função.
let nome = "Renan";
let sobrenome = "Lima";

// Chamada da função com parâmetros.
console.log(nomeCompleto(nome, sobrenome));

// Também posso fazer uma variável receber um parâmetro
let imprimir = nomeCompleto("Renan", "Lima");
console.log(imprimir);

// Também posso utilizar para verificações
function verificarIdade(idade) {
  if (idade <= 17) {
    return "Não é maior";
  } else {
    return "É maior";
  }
}

// verificar idade:
let idade = 10;

console.log(verificarIdade(idade));
