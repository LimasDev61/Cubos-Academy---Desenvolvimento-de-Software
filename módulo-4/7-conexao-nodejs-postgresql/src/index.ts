import app from "./app";
import "dotenv/config";

const porta = process.env.PORT || 3000;

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
