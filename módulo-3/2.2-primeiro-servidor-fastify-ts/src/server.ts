import fastify, {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from "fastify";

const server: FastifyInstance = fastify({ logger: true });

server.get(
  "/",
  async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
    const saudacao: string = "Bem Vindo ao primeiro servidor NodeJS com TS";
    res.send(saudacao);
  }
);

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  server.log.info(`Servidor está rodando em ${address}`);
});
