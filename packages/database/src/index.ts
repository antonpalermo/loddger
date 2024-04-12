import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";

import { Database } from "./database";

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL
  })
});

export const database = new Kysely<Database>({ dialect });
