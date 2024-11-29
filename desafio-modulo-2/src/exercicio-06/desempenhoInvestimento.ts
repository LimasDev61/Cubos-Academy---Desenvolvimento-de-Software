function solucao(resultados: number[]) {
  let positivo: number = 0;
  let negativo: number = 0;

  for (let total of resultados) {
    if (total > 0) {
      positivo++;
    } else if (total < 0) {
      negativo++;
    }
  }

  return positivo > negativo
    ? 'POSITIVO'
    : negativo > positivo
    ? 'NEGATIVO'
    : 'NEUTRO';
}

export default solucao;


let resultado: number[] = [0.02, -0.01, 0.03, -0.005, 0.01, -0.02];

console.log(solucao(resultado));