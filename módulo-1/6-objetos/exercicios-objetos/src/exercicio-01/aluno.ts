type TAluno = { matricula: string; nome: string; idade: number };

function solucao(matricula: string, nome: string, idade: number): TAluno {
  const ALUNO: TAluno = {
    matricula: matricula,
    nome: nome,
    idade: idade,
  };

  return ALUNO;
}

export default solucao;

const aluno = solucao("2024", "Renan Alves", 32);

console.log(`matricula: ${aluno.matricula}`);
console.log(`nome: ${aluno.nome}`);
console.log(`idade: ${aluno.idade}`);
