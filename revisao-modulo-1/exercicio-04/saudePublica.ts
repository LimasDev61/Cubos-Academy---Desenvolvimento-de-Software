function solucao(imcs: number[]): number {
  let quantidadeClasseA = 0;
  let quantidadeClasseB = 0;
  let quantidadeClasseC = 0;

  for (let item of imcs) {
    if (item < 25) {
      quantidadeClasseA++;
    } else if (item >= 25 && item <= 29) {
      quantidadeClasseB++;
    } else {
      quantidadeClasseC++;
    }
  }

  const resultado =
    quantidadeClasseA * 0.16 +
    quantidadeClasseB * 0.31 +
    quantidadeClasseC * 0.59;

  return resultado;
}

export default solucao;
