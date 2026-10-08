import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Typography,
} from "@mui/material";
import { getMyMedications } from "@/lib/dal";
import { cardSx, gridSx, pageSx } from "@/lib/dashboardStyles";
import SignOutButton from "../UI/SignOutButton";

export default async function PatientDashboard() {
  const medications = await getMyMedications();
  const count = medications.length;

  return (
    <Box sx={pageSx}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box sx={{ alignSelf: "flex-end" }}>
          <SignOutButton />
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "2.25rem", sm: "3rem" },
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            Your medications
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {count} active {count === 1 ? "medication" : "medications"}
          </Typography>
        </Box>

        {count === 0 ? (
          <Typography color="text.secondary">
            You have no active medications.
          </Typography>
        ) : (
          <Box sx={gridSx}>
            {medications.map((med) => (
              <Card key={med.id} sx={cardSx("primary")}>
                <CardContent
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{ fontWeight: 700 }}
                    >
                      {med.name}
                    </Typography>
                    <Chip size="small" color="primary" label={med.dosage} />
                  </Box>
                  <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                    {med.frequency}
                  </Typography>
                  <Typography variant="body2">{med.instructions}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
