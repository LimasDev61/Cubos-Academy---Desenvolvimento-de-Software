function solucao(quantidadeAcai) {
  
  return quantidadeAcai < 40;

}

module.exports = solucao;

let quantidadeAcai = 50;
console.log(solucao(quantidadeAcai));

quantidadeAcai = 30;
console.log(solucao(quantidadeAcai));
