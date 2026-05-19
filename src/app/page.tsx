import { Typography, Box, Stack } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box component="header" sx={{ width: "100%" }}>
      {/* NavBar */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "center",
        }}
      >
        <Image
          src="/icon.jpg"
          alt="Core Pulse Logo"
          width={70}
          height={70}
          priority
        />

        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: 600, color: "primary.main" }}
        >
          Core Pulse
        </Typography>
      </Stack>
      {/* === NavBar === */}
      <Image
        src="/homePage/corepulseHero.png"
        alt="Core Pulse Hero"
        width={5000}
        height={400}
        priority
        style={{
          width: "100%",
          height: "80vh",
        }}
      />
    </Box>
  );
}
