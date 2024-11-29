function solucao(
  precoVenda: number,
  precoCompra: number,
  valorInvestido: number
) {
  return (precoVenda - precoCompra) * valorInvestido;
}
export default solucao;

let precoVenda: number = 6.5;
let precoCompra: number = 6.4;
let valorInvestido: number = 1000;

const somar: number = Math.ceil(solucao(precoVenda,precoCompra,valorInvestido));

console.log(somar);