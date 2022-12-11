import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import "./style.css";
import { AlertProvider, CSSPrioritize } from "@hilma/forms";

import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSPrioritize>
        <AlertProvider>
          <App />
        </AlertProvider>
      </CSSPrioritize>
    </ThemeProvider>
  </React.StrictMode>
);
