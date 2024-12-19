/*
Disputando o controle remoto da TV, dois irmãos, João e André decidiram quem ficaria 
com o controle jogando pedra, papel ou tesoura.

Cada jogador escolhe uma das opções para jogar, sendo que:

Perdra ganha de tesoura, mas perde de papel
Papel ganha de pedra, mas perde de tesoura
Tesoura ganha de papel, mas perde de pedra
Caso ambos os jogadores joguem a mesma coisa, há um empate
O seu objetivo é fazer um programa de computador que determine quem é o vencedor do 
jogo, ou informar se houve um empate

Input Format

A entrada será sempre composta por dois parâmentos:

joao: variável que contém um string, informando se ele jogou PEDRA, PAPEL ou TESOURA
andre: variável que contém um string, informando se ele jogou PEDRA, PAPEL ou TESOURA
Output Format

Imprima na tela se o vencedor do jogo foi JOAO ou ANDRE. Caso o jogo dê empate, imprima 
EMPATE. Utilize sempre em maiúsculas para essas strings e sem acentuação.
*/

function solucao(joao, andre) {
  joao = joao.toUpperCase();
  andre = andre.toUpperCase();

  if (joao === andre) {
    console.log("EMPATE");
  } else if (joao === "TESOURA" && andre === "PAPEL") {
    console.log("JOAO");
  } else if (joao === "PEDRA" && andre === "TESOURA") {
    console.log("JOAO");
  } else if (joao === "PAPEL" && andre === "PEDRA") {
    console.log("JOAO");
  } else {
    console.log("ANDRE");
  }
}
