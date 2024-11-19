function solucao(rank: string[]): string {
  return `${rank[rank.length - 1]}`;
}

export default solucao;

let rank: string[] = ["Amora", "Stephane", "Francisco", "Renan"];

console.log(solucao(rank));
