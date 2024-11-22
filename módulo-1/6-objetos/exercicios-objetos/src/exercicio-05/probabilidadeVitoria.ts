type TDados = { nome: string; probabilidades: number[] };

function solucao(dados: TDados): number | string {
  let totalWin: number = 0;

  for (let i = 0; i < dados.probabilidades.length; i++) {
    totalWin += dados.probabilidades[i];
  }

  let mediaWin: number = totalWin / dados.probabilidades.length;

  if (mediaWin >= 0) {
    return mediaWin;
  } else {
    return "DADOS INSUFICIENTES";
  }
}

export default solucao;

const DADOS: TDados = {
  nome: "Cruzeiro",
  probabilidades: [70, 80, 65, 75, 85],
};

console.log(solucao(DADOS));
