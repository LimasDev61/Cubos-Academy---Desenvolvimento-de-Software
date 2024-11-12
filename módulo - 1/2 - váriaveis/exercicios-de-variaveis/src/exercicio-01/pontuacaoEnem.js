function solucao(linguagens, humanas, natureza, matematica) {

  return linguagens + humanas + natureza + matematica;

}

module.exports = solucao;

const RESULTADO = solucao(500, 500, 800, 400);

console.log(RESULTADO);
