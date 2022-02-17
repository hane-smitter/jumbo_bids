import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, blue } from "@mui/material/colors";

import Home from "./components/Home";
import Form from "./components/Form/Form";
import Faqs from "./components/Faqs";
import PastBids from "./components/PastBids";
import Register from "./components/Register";
import Login from "./components/Login";
import Detail from "./components/Products/Product/Details";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    common: {
      black: "#1D1E20",
    },
    primary: {
      main: blue["A200"],
      light: blue[300],
      dark: blue[800],
      contrastText: "#ffffff",
    },
    secondary: {
      main: amber[400],
      light: amber[300],
      dark: amber[700],
      contrastText: "#ffffff",
    },
    background: {
      default: "rgb(250, 249, 252)",
    },
  },
  typography: {
    htmlFontSize: 15,
    fontFamily: [
      "Lato",
      "sans-serif",
      "Arial",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
    ].join(","),
    fontWeightMedium: 700,
    fontWeightBold: 900,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="pastbids" element={<PastBids />} />
            <Route path="product/create" element={<Form />} />
            <Route path="detail" element={<Detail />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
