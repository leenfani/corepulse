import { Box, Typography } from "@mui/material";

export default function ProblemSection() {
  return (
    <Box
      sx={{
        mt: 7,
        pb: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        maxWidth: "800px",
        mx: "auto",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#c71818",
          fontSize: { xs: "1.5rem", md: "2rem", lg: "2.3rem" },
        }}
      >
        The Problem
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.3rem" },
          p: 3,
        }}
      >
        Patients struggle to follow care plans on their own, while nurses can
        not monitor their patient continuously
      </Typography>

      <Typography
        sx={{
          fontWeight: "bold",
          color: "secondary.main",
          fontSize: { xs: "1.5rem", md: "2rem", lg: "2.3rem" },
        }}
      >
        Our Solution
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.3rem" },
          p: 3,
        }}
      >
        <Box
          component="span"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Core Pulse
        </Box>{" "}
        connects nurses and patients in real-time. Monitor health plans, track
        progress, continuously. and stay connected—anytime,anywhere.
      </Typography>
    </Box>
  );
}
