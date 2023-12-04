/*
  Warnings:

  - You are about to drop the column `first_name` on the `roles` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `role_id` on the `session` table. All the data in the column will be lost.
  - Added the required column `role_name` to the `roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `session_id` to the `session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `session_name` to the `session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "roles" DROP COLUMN "first_name",
ADD COLUMN     "role_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "session" DROP COLUMN "first_name",
DROP COLUMN "role_id",
ADD COLUMN     "session_id" TEXT NOT NULL,
ADD COLUMN     "session_name" TEXT NOT NULL;
