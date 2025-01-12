import * as fs from "fs";
import * as path from "path";
import express, { Response, Request } from "express";

function loadEnv(filePath: string): void {
    const envPath = path.resolve(__dirname, "..", filePath);

    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, { encoding: "utf-8" });
        envContent.split("\n").forEach(line => {
            const [key, value] = line.split("=");

            if (key && value) {
                process.env[key.trim()] = value.trim().replace(/(^['"]|['"]$)/g, ""); 
            }
        });
    } else {
        console.warn(`Arquivo .env não encontrado no caminho: ${envPath}`);
    }
}

loadEnv(".env");

const server = express();
const port: number = Number(process.env.PORTA || 3000);
const nome: string = process.env.NOME || "Visitante";
const email: string = process.env.EMAIL || "Não informado";

server.get("/", (req: Request, res: Response) => {
    res.send(`<h1>Olá, ${nome}! Bem-vindo ao meu servidor NodeJS com EXPRESS!</h1>
              <p>Email: ${email}</p>`);
});

server.listen(port, (err?: Error) => {
    if (err) {
        console.error(`Erro ao iniciar o servidor: ${err.message}`);
        process.exit(1);
    }
    console.log(`Servidor está escutando na porta ${port}`);
});

