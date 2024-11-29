function solucao(pontosAcumulados: number, valorCompra: number) {
  const desconto:number = 10;
  const desconto_1: number = 20;
  if(pontosAcumulados >= 100 && pontosAcumulados <= 500) {
     let resultado = (valorCompra / 100) * desconto;
     return valorCompra - resultado;
  }
  else if(pontosAcumulados > 500) {
    let resultado = (valorCompra / 100) * desconto_1;
     return valorCompra - resultado;
  }

  return valorCompra;

}
export default solucao;


let pontosAcumulados: number = 600;
let valorCompra: number = 500;

console.log(solucao(pontosAcumulados, valorCompra));


