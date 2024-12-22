function solucao(tipoItensCarrinho: string[], idadeCliente: number): string {
  const bebidaAlcool = tipoItensCarrinho.some(
    (item) => item === "bebida com alcool"
  );

  return bebidaAlcool && idadeCliente < 18
    ? "COMPRA BLOQUEADA"
    : "COMPRA EFETUADA";
}
export default solucao;

const tipoItensCarrinho = [
  "comida",
  "comida",
  "produtos gerais",
  "bebida com alcool",
  "bebida sem alcool",
  "bebida sem alcool",
  "produtos gerais",
];

const faixaEtaria = solucao(tipoItensCarrinho, 16);
console.log(faixaEtaria);
