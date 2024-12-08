function solucao(endereco: string): boolean {
  const listaDeEndereco = endereco.split(",");

  const numeroEndereco = listaDeEndereco[1]?.trim();

  const convert = Number(numeroEndereco);

  return !isNaN(convert);
}

export default solucao;

const endereco: string = "Rua Cidade de Alma, 24a, Cidade de Almeirim, AL";

console.log(solucao(endereco));

const endereco2: string = "Rua Cidade de Alma, 24, Cidade de Almeirim, AL";

console.log(solucao(endereco2));
