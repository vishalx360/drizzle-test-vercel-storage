
import dotenv from "dotenv";
dotenv.config();
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";

export const db = drizzle(sql);

(async () => {
    await migrate(db, { migrationsFolder: "drizzle", });
})().catch((error) => {
    console.error(error);
    process.exit(1);
});


