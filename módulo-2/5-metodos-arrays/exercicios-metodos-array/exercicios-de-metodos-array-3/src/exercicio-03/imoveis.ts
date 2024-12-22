type TAnuncio = {
  titulo: string;
  descricao: string;
  preco: number;
};

function solucao(anuncios: TAnuncio[]): TAnuncio[] | string {
  return anuncios?.length
    ? anuncios.sort((preco1, preco2) => preco1.preco - preco2.preco)
    : "NAO ENCONTRADO";
}
export default solucao;

const anuncios: TAnuncio[] = [
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

console.log(solucao(anuncios));
