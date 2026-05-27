import { Typography, Box, Stack, Grid } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box component="header" sx={{ width: "100%" }}>
      {/* NavBar */}
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

        <Typography
          variant="h4"
          sx={{ fontWeight: 600, color: "primary.main" }}
        >
          Core Pulse
        </Typography>
      </Stack>
      {/* === NavBar === */}

      {/* Hero */}
      <Box sx={{ position: "relative", width: "100%" }}>
        <Image
          src="/homePage/corepulseHero.png"
          alt=""
          width={5000}
          height={400}
          priority
          style={{
            width: "100%",
            height: "80vh",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(142, 160, 165, 0.1)",
            zIndex: 1,
          }}
        >
          <Grid
            container
            sx={{
              position: "absolute",
              inset: 0,
              px: { xs: 3, md: 5 },
              zIndex: 2,
            }}
          >
            <Grid
              size={12}
              sx={{
                justifyContent: "center",
                display: "flex",
                pt: 1,
                height: "fit-content",
              }}
            >
              <Typography
                variant="overline"
                sx={{ color: "primary.main", letterSpacing: 3 }}
              >
                Healthcare Platform
              </Typography>
            </Grid>
            <Grid
              size={6}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "text.secondary",
                  fontSize: { xs: "1.7rem", md: "2.2rem", lg: "2.5rem" },
                }}
              >
                Connect Nurses and Patients for
                <br />
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                  }}
                >
                  Better Continuous Care
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.3rem" },
                }}
              >
                Track health progress, monitor care plans, and keep nurses and
                patients perfectly in sync—every second of the journey.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* === Hero === */}
    </Box>
  );
}
