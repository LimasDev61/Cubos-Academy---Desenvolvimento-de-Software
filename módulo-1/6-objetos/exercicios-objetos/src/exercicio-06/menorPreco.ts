type TProduto = { loja: string; preco: number };

function solucao(produtosEncontrados: TProduto[]): string {
  let menorPreco: TProduto = produtosEncontrados[0];

  for (let i = 1; i < produtosEncontrados.length; i++) {
    if (produtosEncontrados[i].preco < menorPreco.preco) {
      menorPreco = produtosEncontrados[i];
    }
  }

  return menorPreco.loja;
}

export default solucao;

let produtosEncontrados: TProduto[] = [
  {
    loja: "Loja 1",
    preco: 49.99,
  },
  {
    loja: "Loja 2",
    preco: 20,
  },
  {
    loja: "Loja 3",
    preco: 30,
  },
];

console.log(solucao(produtosEncontrados));
