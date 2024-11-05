CREATE TABLE IF NOT EXISTS "sms"."contact_list" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(1024) NOT NULL,
	"description" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sms"."contact_list_contacts" (
	"contact_id" integer NOT NULL,
	"contact_list_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "sms"."contact_list" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "sms"."contact_list_contacts" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "sms"."transaction" ADD COLUMN "contact_list_id" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sms"."contact_list_contacts" ADD CONSTRAINT "contact_list_contacts_contact_id_contact_id_fk" FOREIGN KEY ("contact_id") REFERENCES "sms"."contact"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sms"."contact_list_contacts" ADD CONSTRAINT "contact_list_contacts_contact_list_id_contact_list_id_fk" FOREIGN KEY ("contact_list_id") REFERENCES "sms"."contact_list"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sms"."transaction" ADD CONSTRAINT "transaction_contact_list_id_contact_list_id_fk" FOREIGN KEY ("contact_list_id") REFERENCES "sms"."contact_list"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
