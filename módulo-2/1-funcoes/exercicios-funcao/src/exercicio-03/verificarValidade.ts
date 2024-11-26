type TVerificarValidade = (
  valorLido: number,
  verificarValidade: number[]
) => boolean;

const verificarValidade: TVerificarValidade = (valorLido, valoresValidade) => {
  for (let valor of valoresValidade) {
    if (valor === valorLido) {
      return true;
    }
  }
  return false;
};

export default verificarValidade;
