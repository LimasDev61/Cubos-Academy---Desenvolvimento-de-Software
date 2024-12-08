function solucao(email: string): string {
  const valid = email.indexOf("@");

  return valid > 0 ? "VALIDO" : "INVALIDO";
}
export default solucao;

const email: string = "renanalves000@gmail.com";

console.log(solucao(email));
