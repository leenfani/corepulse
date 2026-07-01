/*
  Warnings:

  - A unique constraint covering the columns `[medical_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `medical_id` to the `users` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `role` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `department` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `gender` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('PATIENT', 'NURSE');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('FEMALE', 'MALE');

-- CreateEnum
CREATE TYPE "Department" AS ENUM ('GERIATRIC', 'PEDIATRIC', 'CARDIOLOGY', 'DERMATOLOGY', 'NEUROLOGY');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "medical_id" INTEGER NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL,
DROP COLUMN "department",
ADD COLUMN     "department" "Department" NOT NULL,
DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender" NOT NULL;

-- DropEnum
DROP TYPE "roles";

-- CreateIndex
CREATE UNIQUE INDEX "users_medical_id_key" ON "users"("medical_id");
