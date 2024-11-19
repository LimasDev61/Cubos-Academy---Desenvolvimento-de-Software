const PESO_PRATO = 0.15;

function solucao(pesoAdicionado) {

  return pesoAdicionado + PESO_PRATO;

}

module.exports = solucao;

let pesoAdicionado = 15.0;

const RESULTADO = solucao(pesoAdicionado);

console.log(RESULTADO);