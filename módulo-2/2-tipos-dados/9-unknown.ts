// unknown = desconhecido
const json: string = '{ "name": "2-tipos-dados" }';

// transformar o json em JS, com o parse
const resultado = JSON.parse(json) as unknown;

// Verificar se o JSON tem de fato a propriedade a qual quero usar existe.
if (
  resultado !== null &&
  typeof resultado === "object" &&
  "name" in resultado &&
  typeof resultado.name === "string"
) {
    console.log('é um objeto com uma propriedade name do tipo string');
} else {
    console.log('formato desconhecido');
}
