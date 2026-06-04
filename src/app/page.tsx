import { Box } from "@mui/material";
import { RoleData } from "./home/RoleData";

// COMPONENTS
import HNavbar from "./home/HNavbar";
import HHero from "./home/HHero";
import ProblemSection from "./home/ProblemSection";
import ScrollReveal from "./UI/ScrollReveal";
import RoleSection from "./home/RoleSection";

export default function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      <HNavbar />
      <HHero />
      <ScrollReveal>
        <ProblemSection />
      </ScrollReveal>

      {RoleData.map((RoleData) => (
        <ScrollReveal key={RoleData.title}>
          <RoleSection {...RoleData} />
        </ScrollReveal>
      ))}
    </Box>
  );
}
