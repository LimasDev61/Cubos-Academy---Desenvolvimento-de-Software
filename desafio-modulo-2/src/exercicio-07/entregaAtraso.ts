type TDados = {
  pedido: string;
  quantidade: number;
  estimativaEntrega: number;
};

function solucao(dadosEntrega: TDados, diaAtual: number) {
  if(diaAtual > dadosEntrega.estimativaEntrega) {
    return 'ENTREGA ATRASADA'
  }  

  return 'ENTREGA NAO ATRASADA'
}
export default solucao;

let dadosEntrega: TDados = {
  pedido: 'TV LED 24 POLEGADAS',
  quantidade: 2,
  estimativaEntrega: 10
};

let diaAtual: number = 11;

console.log(solucao(dadosEntrega, diaAtual));