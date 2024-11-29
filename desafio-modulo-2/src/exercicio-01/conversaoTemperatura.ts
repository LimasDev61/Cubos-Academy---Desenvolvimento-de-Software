
function solucao(celsius: number) {
 
  const temperatura: number = 273;
  return temperatura + celsius;

}
export default solucao;

let celsius: number = 10;

console.log(solucao(celsius));