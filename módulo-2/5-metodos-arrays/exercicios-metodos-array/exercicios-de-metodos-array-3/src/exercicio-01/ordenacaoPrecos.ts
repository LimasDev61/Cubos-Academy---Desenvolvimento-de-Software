type TFiltroPreco = "crescente" | "decrescente";

function solucao(precos: number[], filtroPreco: TFiltroPreco): number[] {
  if (filtroPreco === "crescente") {
    precos.sort((maior, menor) => maior - menor);
  } else if (filtroPreco === "decrescente") {
    precos.sort((maior, menor) => menor - maior);
  }

  return precos;
}
export default solucao;

const precos: number[] = [40, 35, 9, 402, 44.1];

const result = solucao(precos, "decrescente");

console.log(result);
