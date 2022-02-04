import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
// import { AnimatePresence } from "framer-motion";
import "@fontsource/lato";
import { StyledEngineProvider } from "@mui/material/styles";

import "./components/Fonts/TickingTimebombBB.ttf";
import store from "./redux/store";
import "./index.css";
import App from "./App";

ReactDom.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </Provider>,
  document.getElementById("root")
);
