// Crie uma função que percorrar um array com nomes de arquivos.
// A função deve verificar se possui ao menos um arquivo com a extensão ".bat".
// Caso exista deverá exibir a mensagem "virus detectado", caso o contrario,
// deverá exibir a mensagem "nenhum vírus encontrado".

const antiVirus = (listaDeArquivos: string[]) =>
  listaDeArquivos.some((item) => {
    const existeVirus = item.includes(".bat");
    return existeVirus;
  });

const arquivos: string[] = ["index.js", "imagem.png", "x.jpeg"];

const check = antiVirus(arquivos);

if (check) {
  console.log("VIRUS ENCONTRADO!");
} 

console.log("NENHUM VIRUS ENCONTRADO");