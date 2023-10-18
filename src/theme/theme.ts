import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4682B4",
    },
    secondary: {
      main: "#555555",
    },
    text: {
      primary: "#555555",
    },
    background: {
      paper: "#DCDCDC",
    },
  },
  typography: {
    fontFamily: "Helvetica-BoldOblique",
    h1: {
      fontSize: 40,
      "@media (max-width:600px)": {
        fontSize: 32,
        fontFamily: "Helvetica-Bold",
      },
    },
    h2: {
      fontSize: 20,
      fontFamily: "Helvetica-Bold",
      "@media (max-width:600px)": {
        fontSize: 16,
      },
    },
    h3: {
      fontSize: 16,
      fontFamily: "Helvetica",
    },
    h4: {
      fontSize: 16,
      "@media (max-width:600px)": {
        fontSize: 12,
      },
    },
    body1: {
      fontSize: 14,
    },
    caption: {
      fontSize: 16,
    },
    body2: {
      fontSize: 30,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "#fff",
          boxShadow: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#000",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12,
          textAlign: "right",
          "&.Mui-error": {
            fontSize: 12,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          overflow: "visible",
        },
      },
    },
  },
});

export default theme;
