// IMPLEMENTE AQUI A SUA FUNÇÃO
type TImovel = {
  titulo: string;
  descricao: string;
  preco: number;
};
function solucao(anuncios: TImovel[], precoMaximo: number): TImovel[] | string {
  anuncios = anuncios.filter((imovel) => imovel.preco <= precoMaximo);
  return anuncios.length > 0 ? anuncios : "NAO ENCONTRADO";
}
export default solucao;

const anuncios = [
  {
    titulo: "Apartamento Reformado",
    descricao: "Apartamento confortável e seguro",
    preco: 3000,
  },
  {
    titulo: "Casa Branca",
    descricao: "Casa com 3 quartos e 2 banheiros",
    preco: 1500.67,
  },
  {
    titulo: "Apartamento com piscina",
    descricao: "Apartamento confortável, com piscina, sauna e churrasqueira",
    preco: 5600,
  },
  {
    titulo: "Casa com 4 quartos",
    descricao: "A casa possui 4 quartos, 2 banheiros e uma sala de estar",
    preco: 2900,
  },
  {
    titulo: "Kitnet",
    descricao: "Kitnet aconchegante, com lareira e banheira privada",
    preco: 4325,
  },
];

const saidaAluguel = solucao(anuncios, 3500);

console.log(saidaAluguel);
