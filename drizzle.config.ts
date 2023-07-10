// drizzle.config.ts
import type { Config } from "drizzle-kit";
import "dotenv/config";
import { env } from "./src/env.mjs";

export default {
  schema: "./src/lib/schema.ts",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    host: env.POSTGRES_HOST,
    port: 5432,
    database: env.POSTGRES_DATABASE,
    user: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    ssl: true
  }
} satisfies Config;

