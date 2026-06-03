import { Box } from "@mui/material";

// COMPONENTS
import HNavbar from "./home/HNavbar";
import HHero from "./home/HHero";
import ProblemSection from "./home/ProblemSection";
import ScrollReveal from "./UI/ScrollReveal";

export default function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      <HNavbar />
      <HHero />
      <ScrollReveal>
        <ProblemSection />
      </ScrollReveal>
    </Box>
  );
}
