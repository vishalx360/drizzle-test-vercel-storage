// drizzle.config.ts
import type { Config } from "drizzle-kit";
import "dotenv/config";
import dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/lib/schema.ts",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    host: process.env.POSTGRES_HOST,
    port: 5432,
    database: process.env.POSTGRES_DATABASE,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    ssl: true
  }
} satisfies Config;

