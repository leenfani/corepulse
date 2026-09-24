import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import bcrypt from "bcryptjs";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const nursePassword = await bcrypt.hash("nursepass123", 10);
  const patientPassword = await bcrypt.hash("patientpass123", 10);

  const nurse = await prisma.user.upsert({
    where: { medicalId: 1001 },
    update: {},
    create: {
      medicalId: 1001,
      name: "Sophia Marie Rodriguez -demo-",
      role: "NURSE",
      department: "CARDIOLOGY",
      gender: "FEMALE",
      dateOfBirth: new Date("1995-01-01"),
      passwordHash: nursePassword,
    },
  });

  const patient = await prisma.user.upsert({
    where: { medicalId: 2001 },
    update: {},
    create: {
      medicalId: 2001,
      name: "Alexander James Vance -demo-",
      role: "PATIENT",
      department: "CARDIOLOGY",
      gender: "MALE",
      dateOfBirth: new Date("1980-05-10"),
      passwordHash: patientPassword,
    },
  });

  await prisma.medication.deleteMany({
    where: { patientId: patient.id },
  });

  await prisma.medication.create({
    data: {
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      instructions: "Take your tablet at morning with water.",
      startDate: new Date("2026-01-01"),
      isActive: true,
      patientId: patient.id,
      nurseId: nurse.id,
    },
  });

  await prisma.medication.create({
    data: {
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      instructions: "Take with or after meals.",
      startDate: new Date("2026-02-15"),
      isActive: true,
      patientId: patient.id,
      nurseId: nurse.id,
    },
  });

  console.log({ nurse, patient });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
