// Variável para teste literals para mostrar que essa variável só pode ter o mesmo
// valor de tipo, que é 'Ferrari'.
let modelo: 'Ferrari';

// Agora no modelo, posso ter quantas ferraris eu quiser.
modelo = 'Ferrari';
modelo = 'Ferrari';
modelo = 'Ferrari';
modelo = 'Ferrari';
modelo = 'Ferrari';

// Quando defino o tipo literal - 'valor', eu só posso ter o mesmo valor para receber
// No caso aqui é só 0;
let inativo: 0 = 0;
let ativo: 1 = 1;

console.log(inativo, ativo);

// Types com objetos, tipos literais
type TCarroFord = {
    modelo: string
    marca: 'Ford'
    ano: number
    cor: string
}

// Array carros
const carros: TCarroFord[] = [];

// Adicionando carros
carros[carros.length] = {
    modelo: 'Fiesta',
    cor: 'Preto',
    ano: 2020,
    marca: 'Ford' // Tipo literals
}

// Saída do objeto
console.log(carros)