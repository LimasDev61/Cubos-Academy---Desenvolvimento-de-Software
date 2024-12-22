function solucao(livros: string[]): string | string[] {
  if (livros.length === 0) {
    return "NENHUM LIVRO ENCONTRADO";
  }
  return livros.reverse();
}
export default solucao;

const catalogoLivros = [
  "Harry Potter",
  "O Senhor dos Anais",
  "Crepusculo",
  "Percy Jackson",
];

console.log(solucao(catalogoLivros));
