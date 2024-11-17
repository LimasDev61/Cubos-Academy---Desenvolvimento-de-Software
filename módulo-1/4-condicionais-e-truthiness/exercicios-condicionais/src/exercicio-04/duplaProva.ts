export default function solucao(
  notaAlunoA: number,
  notaAlunoB: number
): string {

  let solucao: string;

  return solucao = (notaAlunoA - notaAlunoB < 1.5) ? 'DUPLA VALIDA' : 'DUPLA INVALIDA';

}

let notaAlunoA: number = 10;
let notaAlunoB: number = 8;

console.log(solucao(notaAlunoA, notaAlunoB));