function solucao(cpfsCadastrados: string[], cpfDigitado: string): string {
  return cpfsCadastrados.includes(cpfDigitado)
    ? "CPF JA CADASTRADO"
    : "CADASTRO REALIZADO COM SUCESSO";
}
export default solucao;

const resultado = solucao(
  [
    "731.686.190-86",
    "927.990.600-30",
    "879.929.560-10",
    "221.244.270-08",
    "942.093.460-80",
    "303.445.130-09",
  ],
  "731.686.190-86"
);

console.log(resultado);