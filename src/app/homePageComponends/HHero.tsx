import { Typography, Box, Stack, Grid, Button } from "@mui/material";
import Image from "next/image";

export default function HHero() {
  return (
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
                fontSize: { xs: "1.6rem", md: "2.2rem", lg: "2.5rem" },
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
                fontSize: { xs: "0.9rem", md: "1.3rem" },
              }}
            >
              Track health progress, monitor care plans, and keep nurses and
              patients perfectly in sync—every second of the journey.
            </Typography>
            <Stack
              spacing={2}
              direction={{ xs: "column", sm: "row" }}
              sx={{ mt: 2 }}
            >
              <Button
                variant="contained"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  px: { xs: "10px", md: "30px" },
                }}
              >
                monitor your status
              </Button>
              <Button
                variant="outlined"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  px: { xs: "10px", md: "30px" },
                }}
              >
                monitor your patients
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
