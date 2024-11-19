function solucao(botoesApertados: string[]): string {
  let totalX: number = 0;
  let totalY: number = 0;

  for (let i = 0; i < botoesApertados.length; i++) {
    if (botoesApertados[i] === "A1") {
      totalX++;
    } else if (botoesApertados[i] === "A2") {
      totalY++;
    }
  }

  if (totalX === totalY) {
    return "DIVERSIFICADO";
  }

  return totalX > totalY ? "NERD" : "ATLETA";
}

export default solucao;

let botoesApertados: string[] = ["A1", "A2", "E", "A1", "A2", "A2", "A1", "A1"];

console.log(solucao(botoesApertados));
