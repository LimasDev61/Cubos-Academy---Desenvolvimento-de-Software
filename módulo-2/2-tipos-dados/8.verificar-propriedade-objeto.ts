type TPessoa = {
    nome: string;
    idade?: number;
}

const renan: TPessoa = {
    nome: 'Renan'
}

function saudacao(nome: string, idade: number) {
    console.log(`Meu nome é: ${nome}, e tenho ${idade} anos`);
}

// Verificador da propriedade
console.log('idade' in renan);

// Saída false, porque não tem a propriedade idade dentro do objeto 'renan';
