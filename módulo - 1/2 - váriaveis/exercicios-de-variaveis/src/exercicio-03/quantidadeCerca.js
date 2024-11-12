const FATOR = 2;

function solucao(comprimento, largura) {

  return (comprimento + largura) * FATOR;
  
}

module.exports = solucao;

let comprimento = 20;

let largura = 15;

const RESULTADO = solucao(comprimento, largura);

console.log(RESULTADO);

