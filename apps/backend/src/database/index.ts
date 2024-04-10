import { Pool, PoolClient } from "pg";
import { Kysely, PostgresDialect, PostgresDialectConfig } from "kysely";

import { Database } from "./schema";

const config: PostgresDialectConfig = {
  pool: new Pool({
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT!),
    max: 10,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  })
};

const dialect = new PostgresDialect(config);

const database = new Kysely<Database>({ dialect });

export default database;
