function solucao(cpfsCadastrados: string[]): string {
  const planilha = cpfsCadastrados.every((cpf) => cpf.length === 11);

  return planilha ? "PLANILHA VALIDA" : "PLANILHA INVALIDA";
}

export default solucao;

const cpfsCadastrados = [
  "73168619086",
  "92799060030",
  "87992956010",
  "2212442700",
  "94209346080",
  "30344513009",
];

console.log(solucao(cpfsCadastrados));
