import fastify from "fastify";

const serve = fastify({logger: true});

serve.get("/", function control(req, res) {
    const saudacao = "Bem Vindo ao primeiro servidor Node.js";
    return res.send(saudacao);
})

serve.listen({
    port: 3000,
})