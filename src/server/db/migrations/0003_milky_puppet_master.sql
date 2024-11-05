ALTER TABLE "sms"."sender" ADD COLUMN "name" varchar(1024);--> statement-breakpoint
ALTER TABLE "sms"."sender" DROP COLUMN IF EXISTS "sender_name";