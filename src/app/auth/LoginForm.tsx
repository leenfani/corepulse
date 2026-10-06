"use client";

import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import type { Role } from "@/generated/prisma/enums";
import WelcomScreen from "../UI/WelcomScreen";
import { useRouter } from "next/navigation";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export default function LoginForm() {
  const router = useRouter(); 
  const [medicalId, setMedicalId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [role, setRole] = useState<Role | null>(null);

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const result = await signIn("credentials", {
        medicalId,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid medical ID or password. Check both and try again.");
        return;
      }

      const session = await getSession();
      const userRole = session?.user?.role;

      if (!userRole) {
        setError("Something went wrong. Try again in a moment.");
        return;
      }

      setRole(userRole as Role);
      router.refresh();
    } catch {
      setError("Something went wrong. Try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }


  if (role) {
    return <WelcomScreen role={role} />; 
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Card
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "100%", maxWidth: 400 }}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}
        >
          <Typography variant="h5" component="h1">
            Sign in to{" "}
            <Box sx={{ color: "primary.main" }} component="span">
              CorePulse
            </Box>
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            label="Medical ID"
            value={medicalId}
            onChange={(e) => setMedicalId(e.target.value)}
            required
            autoFocus
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={submitting}
          >
            {submitting ? "Signing in…" : "Sign in"}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
