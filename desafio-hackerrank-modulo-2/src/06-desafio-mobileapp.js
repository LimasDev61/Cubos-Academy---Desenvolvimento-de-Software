/* 
Você está trabalhando num aplicativo de mobilidade e ficou com a tarefa de fazer a 
funcionalidade que calcula o valor a pagar do usuário. Olha só que responsa, hein?

A lógica é a seguinte:

Caso a viagem seja muito curta, ou seja, dure menos de 05 minutos, a corrida 
custará 6 reais, indepententemente da distância percorrida.

Caso a viagem seja média, ou seja, dure entre 05 minutos e uma hora, a viagem custará 
1 real por minuto mais 50 centavos por quilômetro percorrido.

Para viagens mais longas, que durem mais de uma hora, o preço da viagem deixa de 
depender do tempo e passa a depender apenas da distância percorrida.

Neste caso, a viagem custará:

2 reais por quilômetro, caso a distância seja menor que 100km
1,50 reais por quilômetro, caso a distância seja 100km ou mais
Input Format

A entrada será composta por dois parâmetros:

tempo sempre dado em minutos
distancia sempre dada em quilômetros.
Output Format

Imprima na tela o preço total a ser pago pelo usuário, EM CENTAVOS. Lembre-se de 
que 1 real equivalem a 100 centavos.
*/

function solucao(tempo, distancia) {
  if (tempo < 5) {
    console.log(600);
  } else if (tempo >= 5 && tempo <= 60) {
    const custoTempo = tempo * 100;
    const custoDistancia = distancia * 50;
    console.log(custoTempo + custoDistancia);
  } else {
    if (distancia < 100) {
      const custoDistancia = distancia * 200;
      console.log(custoDistancia);
    } else {
      const custoDistancia = distancia * 150;
      console.log(custoDistancia);
    }
  }
}
