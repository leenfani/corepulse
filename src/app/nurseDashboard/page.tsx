import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Typography,
} from "@mui/material";
import { getDepartmentPatients } from "@/lib/dal";
import { cardSx, gridSx, pageSx } from "@/lib/dashboardStyles";
import SignOutButton from "../UI/SignOutButton";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default async function NurseDashboard() {
  const patients = await getDepartmentPatients();
  const count = patients.length;

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
            Your patients
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {count} {count === 1 ? "patient" : "patients"} in your department
          </Typography>
        </Box>

        {count === 0 ? (
          <Typography color="text.secondary">
            No patients in your department yet.
          </Typography>
        ) : (
          <Box sx={gridSx}>
            {patients.map((patient) => (
              <Card key={patient.id} sx={cardSx("secondary")}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "secondary.main",
                        color: "text.primary",
                        fontWeight: 700,
                      }}
                    >
                      {initials(patient.name)}
                    </Avatar>
                    <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                      <Typography
                        variant="h6"
                        component="h2"
                        noWrap
                        sx={{ fontWeight: 700 }}
                      >
                        {patient.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Medical ID {patient.medicalId}
                      </Typography>
                    </Box>
                  </Box>

                  <Chip
                    size="small"
                    color="primary"
                    variant="outlined"
                    label={`${patient.patientMedications.length} active`}
                    sx={{ mb: 1.5 }}
                  />

                  {patient.patientMedications.length === 0 ? (
                    <Typography variant="body2">
                      No active medications.
                    </Typography>
                  ) : (
                    patient.patientMedications.map((med) => (
                      <Box key={med.id} sx={{ mb: 1 }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          {med.name} · {med.dosage}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {med.frequency}
                        </Typography>
                      </Box>
                    ))
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}