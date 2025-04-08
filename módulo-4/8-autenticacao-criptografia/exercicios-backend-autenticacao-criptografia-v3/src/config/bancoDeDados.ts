import { Pool } from "pg";

const pool = new Pool({
  user: process.env.USER_DB,
  password: process.env.USER_PWD,
  host: process.env.USER_HOST,
  port: Number(process.env.USER_PORT),
  database: process.env.DB_NAME,
});

export default pool;
