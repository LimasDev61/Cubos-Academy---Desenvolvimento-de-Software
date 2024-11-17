export default function solucao(cerveja: string, temperatura: number): string {

  if (cerveja === "pilsen") {
    if (temperatura >= 0 && temperatura <= 4) {
      return "TEMPERATURA IDEAL";
    }
  } else if (cerveja === "trigo") {
    if (temperatura >= 4 && temperatura <= 6) {
      return "TEMPERATURA IDEAL";
    }
  } else if (cerveja === "ipa") {
    if (temperatura >= 7 && temperatura <= 10) {
      return "TEMPERATURA IDEAL";
    }
  }

  return "TEMPERATURA NAO IDEAL";

}

let cerveja: string = 'ipa';
let temperatura: number = 7;

console.log(solucao(cerveja, temperatura));