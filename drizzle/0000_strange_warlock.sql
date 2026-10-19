CREATE TABLE `trips` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`title` text NOT NULL,
	`place` text NOT NULL,
	`region` text NOT NULL,
	`days` text NOT NULL,
	`body` text NOT NULL,
	`image` text NOT NULL,
	`author` text NOT NULL,
	`created` integer NOT NULL
);
