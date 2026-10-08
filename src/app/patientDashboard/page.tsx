import { verifySession } from "@/lib/dal";
import { redirect } from "next/navigation";

export default async function patientDashboard() {
  const { role } = await verifySession();
  if (role === "NURSE") redirect("/nurseDashboard");
  if (role !== "PATIENT") redirect("/login");
  return <h1>PATIENT</h1>;
}
