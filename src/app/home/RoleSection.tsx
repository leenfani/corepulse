import { Box, Typography } from "@mui/material";
import Image from "next/image";

export interface RoleSectionProps {
  title: string;
  body: string;
  image: string;
  imagePosition?: "left" | "right";
}

export default function RoleSection({
  title,
  body,
  image,
  imagePosition = "left",
}: RoleSectionProps) {
  return (
    <Box
      sx={{
        mb: 10,
        display: "flex",
        flexDirection: {
          xs: "column",
          md: imagePosition === "left" ? "row" : "row-reverse",
        },
        alignItems: { xs: "center", md: "stretch" },
        width: "100%",
        backgroundColor: "primary.main",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "50%" },
          minHeight: { xs: "300px", md: "450px" },
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </Box>

      <Box
        sx={{
          py: 6,
          px: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: { xs: "2rem", lg: "2.5rem" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "1.3rem", md: "1.5rem" },
            p: 2,
          }}
        >
          {body}
        </Typography>
      </Box>
    </Box>
  );
}
