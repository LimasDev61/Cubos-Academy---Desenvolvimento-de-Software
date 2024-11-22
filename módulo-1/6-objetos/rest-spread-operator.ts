// rest => resto ou sobra
// spread => espalhamento


//REST:
// Array criado pessoas, sem propriedades - não é um objeto.
const PESSOAS: string[] = ["Renan", "Amora", "Stephane", "Francisco"];

// Nova nomenclatura para os indicies do PESSOAS, com a desestruturação.
// Criando novo array com padrão rest(...)
// O padrão rest ler a parti da destruturação do item escolhido
const[item1, ...sobraArray] = PESSOAS;

console.log(sobraArray);

//Como funciona com objeto
const USUARIO = {
    nome: 'Renan',
    email: 'renanalves000@gmail.com',
    idade: 32
};

//Criando novo objeto desestruturado
const {idade, ...novoOjeto} = USUARIO;

// Os valores impressos são apenas o do ...novoObjeto, ja que a idade foi declarada
// fora do padrão rest,  todo resto é ignorado.
// Isso é útil quando precisamos remover uma propriedade do objeto, logo criamos um
// novo objeto sem mexer no antigo.
console.log(novoOjeto);


// SPREAD:
// O spread funciona o contrario do rest, o que cria novas propriedades dentro de um
// array
const CARROS = ['Palio', 'GOL'];

// Array, utilizando (...)SPREAD, para acrescentar novos carros a parti do ultimo indice.
const novosCarros = [...CARROS, 'CAMARO', 'OPALA'];
console.log(novosCarros);

// Criando um objeto com propriedades para se utilizar o SPREAD:
const CARRO = {
    cor: 'Azul',
    ano: 1992,
    automatico: false
};

// Objeto 2:
let informaçõesCar = {
    portas: 3,
    potencia: 1000
};

// Novo objeto para trazer as informações do CARRO e informaçõesCar.
let carroCompleto = {
    ...CARRO,
    ...informaçõesCar,
    marca: 'FIAT',
    modelo: 'PALÍO'
};

console.log(carroCompleto);


