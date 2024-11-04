import { type Config } from "drizzle-kit";

import { env } from "@treeshake/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["sms-sender_*"],
} satisfies Config;
