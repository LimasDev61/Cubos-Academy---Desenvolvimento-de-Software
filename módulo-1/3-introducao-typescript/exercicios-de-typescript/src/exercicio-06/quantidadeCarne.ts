function solucao(
  quantidadeCriancas: number,
  quantidadePreAdolescentes: number,
  quantidadeTotal: number
): number {

   let quantidadeAdultos = quantidadeTotal - (quantidadeCriancas + quantidadePreAdolescentes);

   let carneCriancas = quantidadeCriancas * 100;
   let carnePreAdolescentes = quantidadePreAdolescentes * 200;
   let carneAdultos = quantidadeAdultos * 300;
 
   const quantidadeTotalCarne = carneCriancas + carnePreAdolescentes + carneAdultos;
   
   return quantidadeTotalCarne;

}

export default solucao;

let quantidadeCriancas = 20;
let quantidadePreAdolescentes = 10;
let quantidadeTotal = 100;

console.log(solucao(quantidadeCriancas, quantidadePreAdolescentes, quantidadeTotal));

