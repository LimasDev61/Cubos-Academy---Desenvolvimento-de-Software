function solucao(quantidadePessoas, quantidadeDeJogadoresEmCadaTime) {
  
  return quantidadePessoas % quantidadeDeJogadoresEmCadaTime;

}

module.exports = solucao;

let quantidadePessoas = 23;
let quantidadeDeJogadoresEmCadaTime = 5;

let RESOLUCAO = solucao(quantidadePessoas, quantidadeDeJogadoresEmCadaTime);

console.log(RESOLUCAO)
