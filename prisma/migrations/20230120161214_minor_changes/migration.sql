/*
  Warnings:

  - You are about to drop the column `updateb_by` on the `Testimonial` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated_by` to the `Testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Role` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Testimonial` DROP COLUMN `updateb_by`,
    ADD COLUMN `updated_by` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Role_name_key` ON `Role`(`name`);
