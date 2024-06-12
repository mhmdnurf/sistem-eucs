import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

const pgp = pgPromise();

const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;
const database = process.env.POSTGRES_DATABASE;

if (!user || !password || !host || !database) {
  throw new Error(
    "One or more database connection environment variables are not defined"
  );
}

const connectionString = `postgres://${user}:${password}@${host}:5432/${database}?sslmode=require`;

const db = pgp(connectionString);

export default db;
