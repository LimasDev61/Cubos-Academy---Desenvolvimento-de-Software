function solucao(pontuacao: number, pontosConquistados: number): number {
  
  return pontuacao + pontosConquistados;

}

export default solucao;

let pontucao = 300;
let pontosConquistados = 10;

let resultado = solucao(pontucao, pontosConquistados);

console.log(resultado);