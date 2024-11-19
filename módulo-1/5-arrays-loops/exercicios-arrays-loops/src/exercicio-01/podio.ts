function solucao(rank: string[]): string {
  const MELHOR_LUTADOR = rank[0];
  const SEGUNDO_MELHOR = rank[1];
  const TERCEIRO_MELHOR = rank[2];

  return `${MELHOR_LUTADOR}, ${SEGUNDO_MELHOR}, ${TERCEIRO_MELHOR}`;
}

export default solucao;

let rank: string[] = ["Amora", "Stephane", "Francisco", "Renan"];

console.log(solucao(rank));
