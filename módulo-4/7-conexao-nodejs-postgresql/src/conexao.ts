import { Pool } from "pg";
import "dotenv/config"; 

export const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
  // max: 20, // Número máximo de conexões permitidas no pool
});

// se eu criar com os nomes de o .env com esses nomes:
// PGUSER=
// PGPASSWORD=
// PGHOST=localhost
// PGPORT=5432
// PGDATABASE=process.env.USER

// eu consigo apenas criar o arquivo de conexão com o banco de dados, dessa forma:
// import { Pool } from 'pg'
// const pool = new Pool()

    