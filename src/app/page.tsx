import { Box } from "@mui/material";

// COMPONENTS
import HNavbar from "./homePageComponends/HNavbar";
import HHero from "./homePageComponends/HHero";

export default function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      <HNavbar />
      <HHero />
    </Box>
  );
}
