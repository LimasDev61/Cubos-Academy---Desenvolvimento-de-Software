function solucao(notas: number[]): number {
  let PROMOTORES: number = 0;
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 9 && notas[i] <= 10) {
      PROMOTORES++;
    }
  }
  return PROMOTORES;
}

export default solucao;

let notas: number[] = [9, 5, 6, 7, 9, 10];

console.log(solucao(notas));
