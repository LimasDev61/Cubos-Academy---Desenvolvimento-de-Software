// Definição do tipo TArray que representa um objeto contendo:
// - 'list', que é inferido a partir do tipo de 'list' já declarado abaixo;
// - 'name', que é uma string que será o nome a ser buscado na lista.
type TArray = {
  list: typeof list; // 'list' é inferido a partir do tipo da variável 'list', ou seja, um array de strings.
  name: string; // 'name' é uma string que será buscada na 'list'.
};

// Definição do tipo TIndex, que representa uma função que:
// - Recebe um parâmetro do tipo TArray, ou seja, um objeto contendo 'list' e 'name';
// - Retorna um número, que é o índice do nome na lista.
type TIndex = (params: TArray) => number;

// Definição da função 'indexSearch', que implementa a lógica de buscar o índice de um nome na lista.
// - A função recebe um objeto com as propriedades 'list' e 'name'.
// - Usa o método 'indexOf' para buscar o índice do nome na lista.
const indexSearch: TIndex = ({ list, name }) => list.indexOf(name);

// Definição da variável 'list', que é um array de strings com alguns nomes.
const list: string[] = ["Renan", "Amora", "Francisco", "Stephane"];

// Chamada da função 'indexSearch', passando um objeto com 'list' e 'name' (o nome a ser buscado).
// Neste caso, estamos buscando pelo nome "Renan".
const result = indexSearch({
  list, // Passando o array de nomes.
  name: "Renan", // Passando o nome que queremos buscar.
});

// Imprime o resultado no console. O índice de "Renan" na lista é 0.
console.log(result); // Saída: 0, pois "Renan" está na posição 0 da lista.
