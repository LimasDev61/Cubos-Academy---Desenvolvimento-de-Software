function solucao(olhosNasLaterais: boolean): string {
  
  return olhosNasLaterais ? 'PRESA' : 'PREDADOR';

}

export default solucao;

let olhosNasLaterais: boolean = true;

if(olhosNasLaterais) {
  console.log(solucao(olhosNasLaterais));
}
else {
  console.log(solucao(olhosNasLaterais));
}