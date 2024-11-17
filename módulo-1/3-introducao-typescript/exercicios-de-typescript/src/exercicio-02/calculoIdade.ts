function solucao(anoNascimento: number, anoAtual: number): number {
  
  return anoAtual - anoNascimento;

}

export default solucao;

let anoAtual = 2024;
let anoNascimento = 1992;

let resultado = solucao(anoNascimento, anoAtual);

console.log(resultado);