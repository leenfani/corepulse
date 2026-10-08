import { verifySession } from "@/lib/dal";
import WelcomScreen from "@/app/UI/WelcomScreen";

export default async function WelcomePage() {
  const { role } = await verifySession();

  return <WelcomScreen role={role} />;
}
