/*
Uma loja que está com um estoque muito grande acumulado resolveu fazer uma promoção para que os clientes levem mais produtos.

Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!

Para que essa promoção funcionasse, foi necessário fazer uma atualização no software do caixa para que fosse possível calcular o valor correto que o cliente deve pagar.

Você ficou com essa tarefa.

Input Format

A entrada será sempre um array contendo apenas números inteiros e positivos representando o valor de cada um dos produtos (em centavos).

Output Format

Imprima na tela apenas um número que representa o total que deve ser pago pelo cliente (aplicando a promoção quando fizer sentido, claro).
*/
function solucao(precos) {
  let total = precos[0];
  let valor = 0;

  if (precos.length >= 5) {
    for (let i = 0; i < precos.length; i++) {
      valor += precos[i];
      if (precos[i] < total) {
        total = precos[i];
      }
    }

    valor -= total;
    console.log(valor);
  } else {
    for (let i = 0; i < precos.length; i++) {
      valor += precos[i];
    }

    console.log(valor);
  }
}
