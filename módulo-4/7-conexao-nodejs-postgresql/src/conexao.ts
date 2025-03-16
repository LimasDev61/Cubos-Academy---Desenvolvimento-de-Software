import { Pool, PoolClient, PoolConfig } from "pg";

const config: PoolConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    database: process.env.PG_DATABASE
}

const pool = new Pool(config);

// export const client = new Client(config);

export default pool;
    