type TPessoa = {
    nome: string;
    idade?: number;
}

const renan: TPessoa = {
    nome: 'Renan'
}

// type assertion forçado
const idade = renan.idade as number

function saudacao(nome: string, idade: number) {
    console.log(`Meu nome é: ${nome}, e tenho ${idade} anos`);
}


saudacao(renan.nome, idade);