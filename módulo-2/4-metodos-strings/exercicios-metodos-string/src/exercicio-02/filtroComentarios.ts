function solucao(comentario: string): boolean {
  const comentarioUp = comentario.trim().toUpperCase();

  if (comentarioUp.includes("COVID") || comentarioUp.includes("PANDEMIA")) {
    return false;
  }

  return true;
}
export default solucao;

const text: string = "Esse covid é muito perigoso!";

console.log(solucao(text));
