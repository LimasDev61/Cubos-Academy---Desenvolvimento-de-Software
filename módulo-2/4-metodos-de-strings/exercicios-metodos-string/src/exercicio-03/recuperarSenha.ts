function solucao(numeroCadastrado: string): string {
  if (numeroCadastrado.length < 4) {
    return numeroCadastrado;
  }

  const pedStr = numeroCadastrado.slice(0, 2);
  const pedEnd = numeroCadastrado.slice(-2);

  const parteOculta = "".padStart(numeroCadastrado.length - 4, "*");

  return pedStr.concat(parteOculta, pedEnd);
}

export default solucao;

const text: string = "12345";

console.log(solucao(text));
