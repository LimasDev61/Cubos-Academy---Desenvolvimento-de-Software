function solucao(livros: string[], livroProcurado: string): string {
  const livroProcuradoIndex = livros.findIndex(
    (livro) => livro === livroProcurado
  );

  return livroProcuradoIndex === -1
    ? "NENHUM LIVRO ENCONTRADO"
    : `O LIVRO ESTA NA POSICAO ${livroProcuradoIndex + 1}`;
}
export default solucao;

const livros: string[] = [
  "Harry Potter",
  "O Senhor dos Anéis",
  "Crepúsculo",
  "Percy Jackson",
];

const encontrar = solucao(livros, "Crepúsculo");

console.log(encontrar);
