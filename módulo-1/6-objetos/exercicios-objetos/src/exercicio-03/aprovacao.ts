type TAluno = { matricula: string; nome: string; media: number };

function solucao(aluno: TAluno): string {
  if (aluno.media >= 6) {
    return "APROVADO";
  } else {
    return "REPROVADO";
  }
}

export default solucao;

const ALUNO = { matricula: "234S50SS2", nome: "Renan Lima", media: 5.5 };

console.log(solucao(ALUNO));
