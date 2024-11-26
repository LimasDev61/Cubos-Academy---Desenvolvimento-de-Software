// Faça uma função que tem um parâmetro chamado idade e que determina a
// faixa etária de uma pessoa a partir dessa idade.

// 21 anos ou menos => jovem
// 22 a 65 anos => 'adulto(a)
// 66 ou mais anos => idoso(a)

// Sua função deverá retornar um string que se informa se a pessoa é jovem, adulto(a) ou idoso(a)

// Passo 1: Função criada.
const FAIXA_ETARIA = (idade) => {
  if (idade >= 66) {
    return "Idoso(a)";
  } else if (idade >= 22) {
    return "Adulto(a)";
  } else {
    return "Jovem";
  }
};

export default FAIXA_ETARIA;

let idade = 32;
console.log(FAIXA_ETARIA(idade));
