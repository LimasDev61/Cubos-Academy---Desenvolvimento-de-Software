// Qual a menor temperatura registrada?
const medicoesTemperatura = [20.4, 10.8, 34, 23.1, 35, 1, 0];

let menorTemperatura = medicoesTemperatura[0];

for (let temperatura of medicoesTemperatura) {
  if (temperatura < menorTemperatura) {
    menorTemperatura = temperatura;
  }
}

console.log(menorTemperatura);

export default medicoesTemperatura;
