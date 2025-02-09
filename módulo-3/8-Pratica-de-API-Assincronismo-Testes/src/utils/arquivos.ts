import fs from 'fs/promises';
import Link from '../modelos/link';

export const lerDados = async (): Promise<Link[]> => {
    const dados = await fs.readFile('banco-de-dados.json');
    const converter = JSON.parse(dados.toString());

    return converter;
}

export const addDados = async (link: Link): Promise<void> => {
    const dados = await lerDados();
    dados.push(link);

    await fs.writeFile('banco-de-dados.json', JSON.stringify(dados, null, "\t"));
}