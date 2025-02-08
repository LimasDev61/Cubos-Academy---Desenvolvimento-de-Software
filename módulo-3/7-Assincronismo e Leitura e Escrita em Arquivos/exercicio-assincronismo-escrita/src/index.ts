import server from "./rotas/app";

const port = parseInt(process.env.PORT || "3000", 10);

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
