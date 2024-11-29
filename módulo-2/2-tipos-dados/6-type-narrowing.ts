// Type Narrowing => Estreitamento
// Técnica utilizada para deixar o mais assertivo o possível um tipo utilizado

// Teste de Narrowing
let teste: string | number = "Renan";
console.log(typeof teste);
teste = 123;
console.log(typeof teste);

// Criando função para estreitamento:
const soma = (a: number | string, b: number | string) => {
    if (typeof a === "number" && typeof b === "number") {
        console.log("Tipo 1: " + typeof a + ", " + typeof b);
      } else if (typeof a === "number" && typeof b === "string") {
        console.log("Tipo 2: " + typeof a + ", " + typeof b);
      } else if (typeof a === "string" && typeof b === "number") {
        console.log("Tipo 3: " + typeof a + ", " + typeof b);
      } else {
        console.log("Tipo 4: " + typeof a + ", " + typeof b);
      }
    };

soma(12, "321");

// Converter o tipo string para number:
const soma2 = (a: number | string, b: number | string) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
      } else if (typeof a === "number" && typeof b === "string") {
        return a + Number(b);
      } else if (typeof a === "string" && typeof b === "number") {
        return Number(a) + b
      } else {
        return Number(a) + Number(b);
      }
    };

    console.log(soma2('3', '2'));