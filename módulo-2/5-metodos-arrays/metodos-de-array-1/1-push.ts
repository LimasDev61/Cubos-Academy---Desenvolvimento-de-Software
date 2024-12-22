// Define um tipo TArray que representa um objeto com duas propriedades:
// - `num`: um array de números.
// - `adc`: outro array de números.
type TArray = {
  num: number[];
  adc: number[];
};

// Define um tipo TObjetAdc que representa uma função que recebe um parâmetro do tipo TArray
// e retorna um array de números.
type TObjetAdc = (param: TArray) => number[];

// Cria uma constante chamada `adcArray` que é do tipo TObjetAdc, ou seja, uma função que
// recebe um objeto do tipo TArray e retorna um array de números.
// A função adiciona os elementos do array `adc` ao final do array `num` usando o método `push()`
// com o operador de espalhamento `...`, que expande os elementos de `adc` em `num`.
const adcArray: TObjetAdc = ({ num, adc }) => {
  // Adiciona todos os elementos de `adc` ao array `num`.
  num.push(...adc);
  // Retorna o array `num` modificado.
  return num;
};

// Cria um array chamado `arrayNum` contendo números de exemplo.
// Este array serve como base para testar a função `adcArray`.
const arrayNum: number[] = [1, 3, 45, 76, 100];

// Chama a função `adcArray`, passando um objeto com a propriedade `num` igual a `arrayNum`
// e `adc` igual a um novo array com os elementos [150, 130].
// O resultado é armazenado na variável `resultado`.
const resultado = adcArray({
  num: arrayNum,
  adc: [150, 130],
});

// Imprime no console a lista resultante após a adição dos elementos de `adc`.
// A saída mostrará o array `arrayNum` original, modificado pela função `adcArray`.
console.log("lista atual: " + resultado);
