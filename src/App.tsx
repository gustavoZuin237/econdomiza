import { ThemeProvider } from "@mui/material"
import { theme } from "./styles/theme"

export function App() {
  return (
    <ThemeProvider theme={theme}>
      App
    </ThemeProvider>
  )
}