// Definindo função soma
function soma(numero1: number, numero2: number): number {
  return numero1 + numero2;
}

// Armazenando uma função em uma variável, transformado ela em uma função
const funcaoNaVariavel = soma;

// Chamada da função fucaoNaVariavel
console.log(funcaoNaVariavel(10, 20));

// Agora como eu tipo os parâmetros da função
type TPessoa = {
  nome: string;
  idade: number;
  profissao: string;
  saudacao: () => void; // função onde não tem parâmetros e retorna void
};

type TPessoa2 = {
  nome: string;
  idade?: number;
  profissao: string;
  saudacao: (idade: number) => void; // função onde tem parâmetros e retorna void
};
// Agora fucao com objetos
// Definindo um objeto
const pessoa: TPessoa = {
  nome: "Renan",
  idade: 32,
  profissao: "Programador",
  saudacao: function () {
    console.log(
      `Olá, meu nome é ${this.nome}, sou um jovem de ${this.idade} anos, sou ${this.profissao}`
    );
  },
};

// Chamada da função, dentro do objeto pessoa, passando como parametros as propriedades
// do objeto pessoa, usando a palavra this para referenciar as propriedades
pessoa.saudacao();

// A palavra this = este objeto pessoa no caso acima para referenciar as propriedades;

// Outra forma de declarar um objeto
const pessoa2: TPessoa2 = {
  nome: "Renan",
  profissao: "Programador",
  saudacao: function (idade: number) {
    console.log(
      `Olá, meu nome é ${this.nome}, sou um jovem de ${idade} anos, sou ${this.profissao}`
    );
  },
};

pessoa2.saudacao(32);
