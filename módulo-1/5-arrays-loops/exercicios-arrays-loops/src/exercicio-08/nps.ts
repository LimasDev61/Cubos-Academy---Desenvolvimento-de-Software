import { GroupNotificationTypes } from "whatsapp-web.js";

function solucao(notas: number[]): number {
  let promotores = 0;
  let detratores = 0;

  for (let nota of notas) {
    if (nota >= 9 && nota <= 10) {
      promotores++;
    } else if (nota >= 0 && nota <= 6) {
      detratores++;
    }
  }

  let total: number = ((promotores - detratores) / notas.length) * 100;
  return total;
}

export default solucao;

let notas: number[] = [9, 5, 6, 2, 0];

console.log(solucao(notas));
