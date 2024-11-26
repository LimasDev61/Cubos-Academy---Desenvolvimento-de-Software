type TSaudacao = (nome: string) => void;

const mostrarBoasVindas:TSaudacao = (nome) => {
    console.log(`BEM-VINDO, ${nome}`);
};

export default mostrarBoasVindas;


let nome = 'Renan';

mostrarBoasVindas(nome);