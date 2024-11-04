import { type Config } from 'drizzle-kit';

import { env } from '@treeshake/env';

export default {
  out: './src/server/db/migrations',
  schema: './src/server/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  migrations: {
    schema: 'sms',
    table: '__migrations',
  },
  schemaFilter: 'sms',
  tablesFilter: '*',
} satisfies Config;
