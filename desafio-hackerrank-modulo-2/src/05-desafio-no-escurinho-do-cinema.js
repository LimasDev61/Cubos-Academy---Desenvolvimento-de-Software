/*
Você ficou responsável por desenvolver o software do cinema, que indica se uma pessoa 
pode ter acesso ao filme. Além disso, o programa verifica se a pessoa tem direito a meia 
entrada ou se o ingresso deve ser inteira.

Para ter acesso ao filme, a pessoa deve atender os seguintes requisitos:

Ter ingresso
Ter idade igual ou superior a censura ou estar acompanhada dos pais
Uma vez determinado que a pessoa pode ter acesso, é necessário verificar se ela tem 
direito a meia. Para isso, ela precisa atender a pelo menos uma das condições abaixo:

Ter carteirinha de estudante
Ter menos de 18 anos 
*/
function solucao(obj) {
  if (!obj.temIngresso || (obj.idade < obj.censura && !obj.estaComPais)) {
    console.log("ACESSO NEGADO");
    return;
  }

  if (obj.temCarteirinha || obj.idade < 18) {
    console.log("MEIA");
  } else {
    console.log("INTEIRA");
  }
}
