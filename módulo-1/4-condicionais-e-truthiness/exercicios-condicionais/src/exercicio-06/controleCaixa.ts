export default function solucao(
  marcacaoRoleta: number,
  quantidadeCaixa: number,
  precoPassagem: number
): string {

  let valorEsperado = marcacaoRoleta * precoPassagem;

  if(quantidadeCaixa === valorEsperado) {
    return 'TUDO CERTO';
  }
  else if(quantidadeCaixa > valorEsperado) {
    return 'DINHEIRO SOBRANDO'
  }
  else {
    return 'DINHEIRO FALTANDO';
  }
}

let marcacaoRoleta: number = 45;
let quantidadeCaixa: number = 257;
let precoPassagem: number = 5.70;

console.log(solucao(marcacaoRoleta,quantidadeCaixa,precoPassagem));
