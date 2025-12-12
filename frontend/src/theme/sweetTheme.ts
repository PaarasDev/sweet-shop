import { createTheme } from "@mui/material/styles";

export const sweetTheme = createTheme({
  palette: {
    primary: { main: "#F48FB1" }, 
    secondary: { main: "#C8E6C9" }, 
    background: {
      default: "#FFF8E1", 
      paper: "#FFFFFF",
    },
    text: {
      primary: "#5D4037", 
      secondary: "#8D6E63",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h4: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: "bold" },
  },
});
