import { drizzle } from 'drizzle-orm/node-postgres';
import postgres from 'postgres';

import { env } from '@treeshake/env';
import { sql } from 'drizzle-orm';
import * as schema from './schema';

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const conn = globalForDb.conn ?? postgres(env.DATABASE_URL);
if (env.NODE_ENV !== 'production') globalForDb.conn = conn;

const db = drizzle(conn, { schema, logger: true });

// Check if the database is connected
await db.execute(sql`SELECT 1`);
