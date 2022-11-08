import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: "rgb(231, 235, 240)",
    },
    category: {
      planned: "rgb(244, 159, 133)",
      inProgress: "rgb(173, 31, 234)",
      live: "rgb(98, 188, 250)",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
