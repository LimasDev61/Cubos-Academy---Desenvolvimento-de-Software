type TPrato = { nome: string; valor: number; quantidade: number };

function solucao(informacoesPrato: TPrato): number | string {
  if (informacoesPrato.quantidade > 0) {
    return informacoesPrato.valor;
  } else {
    return "PRATO INDISPONIVEL";
  }
}

export default solucao;

const informacoesPrato = { nome: "Arroz", valor: 15, quantidade: 1 };

console.log(solucao(informacoesPrato));
