import * as fs from "fs";
import * as path from "path";

// Função para carregar as variáveis de ambiente do arquivo .env
function loadEnv(filePath: string): void {
    const envPath = path.resolve(__dirname, "..", filePath);

    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, { encoding: "utf-8" });
        envContent.split("\n").forEach(line => {
            const [key, value] = line.split("=");

            if (key && value) {
                process.env[key.trim()] = value.trim().replace(/(^['"]|['"]$)/g, ""); // Remove aspas, se houver
            }
        });
    } else {
        console.warn(`Arquivo .env não encontrado no caminho: ${envPath}`);
    }
}

// Carregue o arquivo .env
loadEnv(".env");

import express, {Response, Request} from "express";

const server = express();
const port: number = Number(process.env.PORT || 3000);

server.get("/", (req: Request, res: Response) => {
    res.send("<h1>Olá, bem-vindo ao meu primeiro servidor NodeJS com EXPRESS!</h1>");
});

server.listen(port, (err?: Error) => {
    if (err) {
        console.error(`Erro ao iniciar o servidor: ${err.message}`);
        process.exit(1);
    }
    console.log(`Server está escutando a porta ${port}`);
});
