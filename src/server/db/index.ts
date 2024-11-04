import { drizzle } from "drizzle-orm/node-postgres";

import { env } from "@treeshake/env";
import { sql } from "drizzle-orm";
import * as schema from "./schema";

export const db = drizzle(env.DATABASE_URL, { schema, logger: true });

// Check if the database is connected
await db.execute(sql`SELECT 1`);
