import { verifySession } from "@/lib/dal";
import { redirect } from "next/navigation";

export default async function nurseDashboard() {
  const { role } = await verifySession();
  if (role === "PATIENT") redirect("/patientDashboard");
  if (role !== "NURSE") redirect("/login");
  return <h1>NURSE</h1>;
}
