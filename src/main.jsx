import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./pages/styles/global.js"

import { AuthProvider } from "./hooks/auth.jsx"

import theme from "./pages/styles/theme.js"

import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
