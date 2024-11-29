function solucao(vendasDiarias: number[]) {
  let soma:number = 0;
  for(let total of vendasDiarias) {
    soma += total;
  }

  return soma;
}
export default solucao;

let vendasDiarias: number[] = [150.5, 200.25, 180.75, 220, 190.8, 210.3, 250.6];

console.log(solucao(vendasDiarias).toFixed(2));