// Objeto CARROS e suas propriedades
const CARROS = [
  {
    marca: "FIAT",
    modelo: "Argo",
    ano: 2024,
    cor: "Vermelho",
    quantidadePortas: 5,
    automatico: false
  },
  {
    marca: "RENAULT",
    modelo: "Sandero",
    ano: 2023,
    cor: "Prata",
    quantidadePortas: 5,
    automatico: false
  },
  {
    marca: "TOYTA",
    modelo: "Corolla",
    ano: 2024,
    cor: "Preto",
    quantidadePortas: 5,
    automatico: true
  },
];

// Loop - for of, para percorrer os elementos do objeto
for (let carro of CARROS) {
  console.log(
    `\nMarca: ${carro.marca}
      Modelo: ${carro.modelo}
      Ano: ${carro.ano}
      Cor: ${carro.cor}
      Portas: ${carro.quantidadePortas}
      Automatico: ${carro.automatico}`
  );
}

// FOR tradicional
for (let i = 0; i < CARROS.length; i++) {
  let carro = CARROS[i]; // Acessa o carro na posição 'i' do array
  console.log(
    `\nMarca: ${carro.marca}
      Modelo: ${carro.modelo}
      Ano: ${carro.ano}
      Cor: ${carro.cor}
      Portas: ${carro.quantidadePortas}
      Automatico: ${carro.automatico}`
  );
}
