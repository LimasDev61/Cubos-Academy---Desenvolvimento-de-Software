type TVenda = (compra: number, venda: number) => string;

const funcaoLucro: TVenda = (compra, venda) => {
  const resultado = parseFloat((venda - compra).toFixed(2));
  if (resultado > 0) {
    return `O valor do lucro é: ${resultado}`;
  } else if (resultado < 0) {
    return `O valor do prejuízo é: ${Math.abs(resultado)}`;
  }

  return `Venda a preço de custo`;
};

export default funcaoLucro;
