/* 
No Brasil, em 2014, tivemos a Copa do Mundo de futebol e em 2016 tivemos os jogos 
olímpicos. Foi um período tão legal que merecia até termos enforcado o ano de 2015, 
não é mesmo?

Sabe-se que as copas do mundo e as olimpíadas acontecem a cada 4 anos. É tão legal, 
que os anos em que não há nem um nem outro acabam ficando bem sem graça.

Faça um programa que determina se num dado ano haverá jogos olímpicos, copa do mundo ou 
se vai ser um ano meio MEH. Sem graça.

Input Format

A entrada será sempre um número inteiro e positivo maior que 2021 representando o ano 
que se deseja saber se terá Copa do Mundo, Olimpíadas, ou se será um ano MEH.

Output Format

Imprima na tela COPA caso no ano dado haja copa do mundo
Imprima na tela JOGOS caso no ano dado haja olimpíadas
Imprima na tela MEH caso no ano dado não haja nem copa do mundo nem olimpíadas
*/

function solucao(ano) {
  const copa = (ano - 2014) % 4;
  const olimpiadas = (ano - 2016) % 4;

  if (copa === 0) {
    console.log("COPA");
    return;
  } else if (olimpiadas === 0) {
    console.log("JOGOS");
  } else {
    console.log("MEH");
  }
}
