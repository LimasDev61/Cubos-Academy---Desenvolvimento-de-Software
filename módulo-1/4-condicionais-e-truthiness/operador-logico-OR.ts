// Código em JS

// Variáveis do tipo boolean e number
const TEM_INGRESSO = true;
const AGE = 15;
const CENSURA = 16;
const ACCOMP_PERENTS = true;

// Operador lógico OR: testa se pelo menos uma condição é verdadeira.
if(TEM_INGRESSO && (AGE >= 16 || ACCOMP_PERENTS)) {
    console.log('Pode entrar na festa!');
}
else {
    console.log('Não pode entrar!');
}
