function solucao(jogadorA: number[]): string {
  let total: number = 120;
  let vencedor = 0;
  for (let i = 0; i < jogadorA.length; i++) {
    vencedor += jogadorA[i];
  }

  let jogadorB = total - vencedor;

  if (vencedor === jogadorB) {
    return "EMPATE";
  }

  return vencedor > jogadorB ? "JOGADOR A GANHOU" : "JOGADOR B GANHOU";
}

export default solucao;

let jogadorA: number[] = [1, 4, 5, 8, 15, 14];

console.log(solucao(jogadorA));
