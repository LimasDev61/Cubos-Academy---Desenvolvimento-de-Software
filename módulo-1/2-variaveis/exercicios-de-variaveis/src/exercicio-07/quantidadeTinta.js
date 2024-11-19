function solucao(comprimento, largura, rendimento) {

  return comprimento * largura * rendimento;

}

module.exports = solucao;

let comprimento = 10;
let largura = 20;
let rendimento = 40;

let quantidadeTinta = solucao(comprimento, largura, rendimento);

console.log(quantidadeTinta);