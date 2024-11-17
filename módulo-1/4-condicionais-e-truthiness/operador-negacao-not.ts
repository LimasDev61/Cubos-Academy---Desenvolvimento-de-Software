// Código criado em TS

// Variável ativo booleana
const ATIVO: boolean = true;

// Sinal de exclamação, nega o resultado da condição.
if(!ATIVO) {
    console.log('Verdadeiro');
}
else {
    console.log('Falso');
};

// Variável desativada booleana
const NAME: string = 'Renan';

// Negando a condição false, se o nome não for digitado.
if(!NAME) {
    console.log(NAME + ' O nome é obrigatório');
} else {
    console.log(NAME + ' Lima');
};