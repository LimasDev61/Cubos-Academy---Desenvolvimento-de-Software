import app from "./app";
import "dotenv/config";

const porta = process.env.PORT;

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
