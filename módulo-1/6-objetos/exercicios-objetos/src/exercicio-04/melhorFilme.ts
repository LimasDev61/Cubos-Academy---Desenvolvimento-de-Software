type TFilme = { nome: string; notas: number[] };

function solucao(filme1: TFilme, filme2: TFilme): string {
  let totalFilme1: number = 0;
  let totalFilme2: number = 0;

  // Calcular a soma das notas de cada filme
  for (let i = 0; i < filme1.notas.length; i++) {
    totalFilme1 += filme1.notas[i];
    totalFilme2 += filme2.notas[i];
  }

  // Calcular a média de cada filme
  let mediaFilme1 = totalFilme1 / filme1.notas.length;
  let mediaFilme2 = totalFilme2 / filme2.notas.length;

  // Comparar as médias para determinar o melhor filme
  if (mediaFilme1 > mediaFilme2) {
    return filme1.nome;
  } else if (mediaFilme2 > mediaFilme1) {
    return filme2.nome;
  } else {
    return "EMPATE";
  }
}

export default solucao;

const filme1: TFilme = {
  nome: "BATMAN",
  notas: [9, 10],
};
const filme2: TFilme = {
  nome: "HARRY POTTER",
  notas: [8, 8],
};

console.log(solucao(filme1, filme2));
