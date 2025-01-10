type TNumDivi = (numero1: number, numero2: number) => number;

const multiplicacao: TNumDivi = (numero1, numero2) => {
    return numero1 / numero2;
}
export default multiplicacao;