import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles, theme } from "./src/globalStyles"

// this needs to be imported into gatsby.
// at the moment the export in ssr and groswer files isn't taking this export
export const InsertGlobalStyles = ({ element, props }) => <GlobalStyles />

export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
