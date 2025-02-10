import fs from "fs/promises";
import Link from "../modelos/link";

const caminhoDados = "src/banco-de-dados.json";
export const lerDados = async (): Promise<Link[]> => {
  const dados = await fs.readFile(caminhoDados);
  const converter = JSON.parse(dados.toString());

  return converter;
};

export const addDados = async (link: Link): Promise<void> => {
  const dados = await lerDados();
  dados.push(link);

  await fs.writeFile(caminhoDados, JSON.stringify(dados, null, 2));
};

export const contarVisitas = async (id: string): Promise<void> => {
  const dados = await lerDados();

  const link = dados.find((link: Link) => {
   return link.id === id
  });

  if(!link) {
    throw new Error("Link não encontrado");
  }

  const linkVisitas: Link = {
    id: link.id,
    url: link!.url,
    visitas: link.visitas + 1
  }

  const indice = dados.findIndex((link: Link) => {
      return link.id === id
  });

  dados.splice(indice, 1, linkVisitas);

  await fs.writeFile(caminhoDados, JSON.stringify(dados, null, 2));
};
