import server from "./app";

const port = parseInt(process.env.PORT || "3000", 10);

server.listen(port, () => console.log(`server está rodando na porta: ${port}`));