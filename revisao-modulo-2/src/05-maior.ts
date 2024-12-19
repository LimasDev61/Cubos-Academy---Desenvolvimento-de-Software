// Qual a maior temperatura registrada?

const medicoesTemperatura = [20.4, 10.8, 34, 23.1, 35, 1, 0];

let maiorTemperatura = medicoesTemperatura[0];

for (let temperatura of medicoesTemperatura) {
  if (temperatura > maiorTemperatura) {
    maiorTemperatura = temperatura;
  }
}

console.log(maiorTemperatura);

export default medicoesTemperatura;
