// Objeto CARROS e suas propriedades
const CARROS = {
  marca: "FIAT",
  modelo: "Argo",
  ano: 2024,
};

// Alterar propriedades
CARROS.marca = "RENAULT";
CARROS.modelo = "Kwid";

console.log(CARROS);

// Adicionar propriedade(s)
CARROS.portas = 5;

// Escrevendo frase com template string, acessando ao objeto.
console.log(
  `\nO modelo do carro é: ${CARROS.modelo}
A marca do carro é: ${CARROS.marca}
O ano do carro é: ${CARROS.ano}
Número de portas: ${CARROS.portas}`
);
