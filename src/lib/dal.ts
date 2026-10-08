import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const verifySession = cache(async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return {
    userId: session.user.id,
    role: session.user.role,
    name: session.user.name ?? "",
  };
});

export const getMyMedications = cache(async () => {
  const { userId, role } = await verifySession();

  if (role === "NURSE") redirect("/nurse/dashboard");
  if (role !== "PATIENT") redirect("/login");

  return prisma.medication.findMany({
    where: { patientId: userId, isActive: true },
    orderBy: { startDate: "desc" },
    select: {
      id: true,
      name: true,
      dosage: true,
      frequency: true,
      instructions: true,
    },
  });
});

export const getDepartmentPatients = cache(async () => {
  const { userId, role } = await verifySession();

  if (role === "PATIENT") redirect("/patient/dashboard");
  if (role !== "NURSE") redirect("/login");

  const nurse = await prisma.user.findUnique({
    where: { id: userId },
    select: { department: true },
  });
  if (!nurse) redirect("/login");

  return prisma.user.findMany({
    where: { role: "PATIENT", department: nurse.department },
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      medicalId: true,
      patientMedications: {
        where: { isActive: true },
        orderBy: { startDate: "desc" },
        select: { id: true, name: true, dosage: true, frequency: true },
      },
    },
  });
});
