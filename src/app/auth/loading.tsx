import { Box, Typography } from "@mui/material";

export default function Loading() {
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
          Welcome To Our{" "}
          <Typography
            component="span"
            variant="inherit"
            sx={{
              fontFamily: "var(--kalam)",
              verticalAlign: "baseline",
              fontWeight: "bold",
            }}
          >
            Bravest Fighter
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
