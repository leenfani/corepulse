"use client";
import { Box, Typography } from "@mui/material";
import type { Role } from "@/generated/prisma/enums";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface WelcomScreenProps {
  role: Role | string | null;
}

export default function WelcomScreen({ role }: WelcomScreenProps) {
  const router = useRouter();
  const destination =
    role === "NURSE" ? "/nurseDashboard" : "/patientDashboard";

  useEffect(() => {
    const timer = setTimeout(() => router.replace(destination), 2500);
    return () => clearTimeout(timer);
  }, [destination, router]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          border: 5,
          borderStyle: "solid",
          borderColor: "primary.main",
          borderRadius: 20,
          height: "20rem",
          width: "55rem",
          maxWidth: "100%",
          m: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            color: "primary.main",
          }}
        >
          <>
            Welcome, our{" "}
            <Typography
              component="span"
              variant="inherit"
              sx={{
                fontFamily: "var(--kalam)",
                verticalAlign: "baseline",
                fontWeight: "bold",
              }}
            >
              {role === "NURSE" ? " White Coated Hero" : "Bravest Fighter"}
            </Typography>
          </>
        </Typography>
      </Box>
    </Box>
  );
}
