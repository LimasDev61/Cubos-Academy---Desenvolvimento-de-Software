import express from "express";

const server = express();
const port = 3000;

server.get("/home", (req, res) => {
    res.send("<h1>Olá, bem-vindo ao meu primeiro servidor NodeJS com EXPRESS</h1>")
})

server.listen(port, (err) => {
    if (err) {
        console.error(`Erro ao iniciar o servidor: ${err.message}`);
        process.exit(1);
    }
    console.log(`Server está escutando a porta ${port}`);
});