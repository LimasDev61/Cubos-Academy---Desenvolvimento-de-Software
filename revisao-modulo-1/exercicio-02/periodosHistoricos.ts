function solucao(ano: number): string {
  if (ano >= -4000 && ano <= 476) {
    return "ANTIGA";
  } else if (ano >= 477) {
    return "MEDIA";
  } else if (ano >= 1454 && ano <= 1789) {
    return "MODERNA";
  } else {
    return "CONTEMPORANEA";
  }
}

export default solucao;

let ano = 477;

console.log(solucao(ano));
