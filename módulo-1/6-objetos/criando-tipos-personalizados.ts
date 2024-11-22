// Organizando os códigos com a palavra reservada type
// Type é sempre criado com o padrão PascalCase, ou iniciado com T, e também o type
// não precisa de virgulas para separar os tipos / propriedades.
type TCarro = {
    modelo: string
    marca: string
    cor?: string // O interrogação, define a propriedade como opcional
    ano: number
};

type TArray = {
    marca: string
    modelo: string
    ano: number
    cor?: string // O interrogação, define a propriedade como opcional
    quantidadePortas: number
    automatico: boolean
};

// Podemos perceber que agora, não precisamos do cor, dentro do escopo do objeto.
const CARRO: TCarro = {
    modelo: 'Argo',
    marca: 'FIAT',
    ano: 2024
};

console.log(CARRO);

// Posso também criar um array de carros, utilizando o type
const CARRO_ARRAY: TArray[] = [
    {
      marca: "FIAT",
      modelo: "Argo",
      ano: 2024,
      cor: "Vermelho",
      quantidadePortas: 5,
      automatico: false,
    },
    {
      marca: "RENAULT",
      modelo: "Sandero",
      ano: 2023,
      cor: "Prata",
      quantidadePortas: 5,
      automatico: false,
    },
    {
      marca: "TOYTA",
      modelo: "Corolla",
      ano: 2024,
      cor: "Preto",
      quantidadePortas: 5,
      automatico: true,
    },
  ];

  console.log(CARRO_ARRAY);