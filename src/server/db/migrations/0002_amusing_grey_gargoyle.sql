ALTER TABLE "sms"."contact" ALTER COLUMN "phone" SET DATA TYPE varchar(64);--> statement-breakpoint
ALTER TABLE "sms"."contact" ALTER COLUMN "first_name" SET DATA TYPE varchar(2048);--> statement-breakpoint
ALTER TABLE "sms"."contact" ALTER COLUMN "last_name" SET DATA TYPE varchar(2048);--> statement-breakpoint
ALTER TABLE "sms"."contact" ALTER COLUMN "email_address" SET DATA TYPE varchar(2048);--> statement-breakpoint
ALTER TABLE "sms"."contact" ALTER COLUMN "country_code" SET DATA TYPE varchar(4);--> statement-breakpoint
ALTER TABLE "sms"."sender" ALTER COLUMN "sender_name" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "sms"."transaction" ALTER COLUMN "unique_cta_ref" SET DATA TYPE varchar(8);--> statement-breakpoint
ALTER TABLE "sms"."transaction" ALTER COLUMN "unique_unsub_ref" SET DATA TYPE varchar(8);