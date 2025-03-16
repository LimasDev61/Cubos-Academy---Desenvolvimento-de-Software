import app from "./app";
import "dotenv/config";

const porta = process.env.PG_PORT;

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
