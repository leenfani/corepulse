import { Stack, Typography } from "@mui/material";
import Image from "next/image";
export default function HNavbar() {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={1}
      sx={{
        alignItems: "center",
      }}
    >
      <Image
        src="/icon/icon.jpg"
        alt="Core Pulse Logo"
        width={70}
        height={70}
        priority
      />

      <Typography variant="h4" sx={{ fontWeight: 600, color: "primary.main" }}>
        Core Pulse
      </Typography>
    </Stack>
  );
}
