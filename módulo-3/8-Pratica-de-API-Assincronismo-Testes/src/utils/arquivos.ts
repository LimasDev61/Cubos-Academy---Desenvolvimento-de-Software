import fs from 'fs/promises';
import Link from "../modelos/link";

const caminhoDados = "src/banco-de-dados.json";
export const lerDados = async (): Promise<Link[]> => {
    const dados = await fs.readFile(caminhoDados);
    const converter = JSON.parse(dados.toString());

    return converter;
}

export const addDados = async (link: Link): Promise<void> => {
    const dados = await lerDados();
    dados.push(link);

    await fs.writeFile(caminhoDados, JSON.stringify(dados, null, 2));
}