import type { SxProps, Theme } from "@mui/material/styles";

export const pageSx: SxProps<Theme> = {
  minHeight: "100vh",
  py: 4,
  px: 2,
  bgcolor: "background.default",
};

export const gridSx: SxProps<Theme> = {
  width: "100%",
  display: "grid",
  gap: 3,
  justifyContent: "center",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 340px))",
};

export const cardSx = (color: "primary" | "secondary"): SxProps<Theme> => ({
  borderRadius: 3,
  border: "1px solid",
  borderColor: "divider",
  borderTop: "6px solid",
  borderTopColor: `${color}.main`,
  boxShadow: 2,
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: 8,
  },
});
