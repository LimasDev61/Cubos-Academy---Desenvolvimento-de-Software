function solucao(pontucao: number, faseSeguinte: number): number {
  
  return pontucao * (faseSeguinte - 1);

}

export default solucao;

let pontucao = 2000;
let faseSeguinte = 4;

console.log(solucao(pontucao, faseSeguinte));