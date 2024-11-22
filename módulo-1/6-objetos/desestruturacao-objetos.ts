const CARRO = {
  marca: "FIAT",
  modelo: "Argo",
  ano: 2024,
  cor: "Vermelho",
  quantidadePortas: 5,
  automatico: false,
  nomeProprietario: {
    primeiroNome: 'Renan',
    segundoNome: 'Alves'
  }
};


// Desestruturação, serve para pegar informações do objeto de forma mais orgnaizada
// Inclusive, podemos renomear cada variável.
const {marca, modelo, ano, cor, quantidadePortas, automatico, nomeProprietario: dono
} = CARRO;

// Imprimiu a propriedade MARCA, para desestruturação tudo vira palavra reservada.
console.log(marca);

// Posso também criar um novo nome para propriedade, como no exemplo "nomeProprietário"
// Vou utilizar a palavra dono, para chamar o objeto.
console.log(dono);

// Assim como também posso chamar através de colchetes uma propriedade de dentro do objeto
// const {marca, modelo, ano, cor, quantidadePortas, automatico, nomeProprietario: {primeiroNome}
//} = CARRO2;
//console.log(primeiroNome);