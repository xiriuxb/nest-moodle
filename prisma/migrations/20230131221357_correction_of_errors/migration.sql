/*
  Warnings:

  - A unique constraint covering the columns `[shortname]` on the table `Course` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Course_shortname_key` ON `Course`(`shortname`);
