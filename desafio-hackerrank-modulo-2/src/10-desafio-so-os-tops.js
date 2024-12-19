/*
No e-commerce em que você trabalha são vendidos os mais diferentes tipos de produtos. Produtos que custam mais de 100 reais são considerados TOP DE LINHA.

O gerente comercial da empresa, também conhecido como SEU CHEFE, quer saber duas coisas:

Quantos reais a empresa faturou através da venda de produtos TOP DE LINHA.
Quantos % do faturamento total da empresa a venda de produtos TOP DE LINHA representa.
Como a lista de produtos é muito grande, não é possível fazer esse cálculo manualmente. Faça um programa que calcule as informações pedidas por seu chefe.

Input Format

A entrada será sempre um array contendo vários objetos.
*/

function solucao(produtos) {
  let totalTop = 0;
  let totalFaturamento = 0;

  for (let produto of produtos) {
    totalFaturamento += produto.preco;
    if (produto.preco > 10000) {
      totalTop += produto.preco;
    }
  }

  let percentual = totalTop / totalFaturamento;

  console.log({
    totalTop: totalTop,
    percentual: percentual,
  });
}
