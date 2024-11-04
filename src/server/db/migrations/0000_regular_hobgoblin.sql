CREATE SCHEMA "sms";
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "sms"."subscription_status" AS ENUM('SUBSCRIBED', 'UNSUBSCRIBED', 'DISABLED');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "sms"."transaction_status" AS ENUM('SUCCESS', 'FAIL', 'UNKNOWN');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sms"."contact" (
	"id" serial PRIMARY KEY NOT NULL,
	"phone" varchar(50) NOT NULL,
	"first_name" varchar(1000) NOT NULL,
	"last_name" varchar(1000) NOT NULL,
	"custom_reference_id" varchar,
	"email_address" varchar(255) NOT NULL,
	"country_code" varchar(50) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sms"."message" (
	"id" serial PRIMARY KEY NOT NULL,
	"sent_as" varchar NOT NULL,
	"message_content" text NOT NULL,
	"sender_id" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sms"."sender" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(11) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sms"."subscription" (
	"id" serial PRIMARY KEY NOT NULL,
	"contact_id" integer NOT NULL,
	"sender_id" integer NOT NULL,
	"status" "sms"."subscription_status" NOT NULL,
	"unsub_transaction_ref" integer,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sms"."transaction" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" "sms"."transaction_status" NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"sent_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"unique_cta_ref" varchar(6),
	"unique_unsub_ref" varchar(6),
	"cta_clicked_at" timestamp with time zone,
	"unsubscribed_at" timestamp with time zone,
	"contact_id" integer NOT NULL,
	"message_id" integer NOT NULL,
	"sender_id" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sms"."message" ADD CONSTRAINT "message_sender_id_sender_id_fk" FOREIGN KEY ("sender_id") REFERENCES "sms"."sender"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sms"."subscription" ADD CONSTRAINT "subscription_contact_id_contact_id_fk" FOREIGN KEY ("contact_id") REFERENCES "sms"."contact"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sms"."subscription" ADD CONSTRAINT "subscription_sender_id_sender_id_fk" FOREIGN KEY ("sender_id") REFERENCES "sms"."sender"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sms"."subscription" ADD CONSTRAINT "subscription_unsub_transaction_ref_transaction_id_fk" FOREIGN KEY ("unsub_transaction_ref") REFERENCES "sms"."transaction"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sms"."transaction" ADD CONSTRAINT "transaction_contact_id_contact_id_fk" FOREIGN KEY ("contact_id") REFERENCES "sms"."contact"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sms"."transaction" ADD CONSTRAINT "transaction_message_id_message_id_fk" FOREIGN KEY ("message_id") REFERENCES "sms"."message"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sms"."transaction" ADD CONSTRAINT "transaction_sender_id_sender_id_fk" FOREIGN KEY ("sender_id") REFERENCES "sms"."sender"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
