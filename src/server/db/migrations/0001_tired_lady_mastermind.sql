ALTER TABLE "sms"."sender" ADD COLUMN "sender_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "sms"."sender" DROP COLUMN IF EXISTS "name";