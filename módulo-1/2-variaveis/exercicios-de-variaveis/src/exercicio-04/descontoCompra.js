const FRACAO = 100;

function solucao(preco, valorDesconto) {

  return preco - (preco * (valorDesconto / FRACAO));

}

module.exports = solucao;


let preco = 10;
let valorDesconto = 30;

const RESULTADO = solucao(preco, valorDesconto);

console.log(RESULTADO);




