import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
});

const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log("Conectado ao PostgreSQL!");
    const res = await client.query("SELECT NOW();");
    console.log("Hora atual no banco:", res.rows[0]);
    client.release();
  } catch (err) {
    console.error("Erro ao conectar no banco:", err);
  }
};

testConnection();
