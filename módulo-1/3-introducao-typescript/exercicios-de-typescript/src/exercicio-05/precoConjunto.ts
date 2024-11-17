function solucao(
  precoPeca1: number,
  precoPeca2: number,
  precoPeca3: number,
  quantidade: number
): number {

  return (precoPeca1 + precoPeca2 + precoPeca3) * quantidade;

}

export default solucao;

let precoPeca1 = 20;
let precoPeca2 = 30;
let precoPeca3 = 50;
let quantidade = 3;

console.log(solucao(precoPeca1, precoPeca2, precoPeca3, quantidade));