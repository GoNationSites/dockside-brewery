// globalStyles.js
import { createGlobalStyle } from "styled-components"

// this needs to be imported into gatsby.
// at the moment the export in ssr and groswer files isn't taking this export
export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;900&display=swap");

html,
body {
  font-family: "Rubik", sans-serif;
  overflow-x: hidden;
  font-weight: 600;
  color:green
}

img {
  object-fit: cover;
}
`

export const theme = {
  primary: `rgb(0, 86, 125)`,
  secondary: `rgb(202, 54, 37)`,
  tertiary: `rgb(202, 54, 37)`,
  dark: `#231f20`,
  light: `rgb(196, 191, 182)`,

  //optional extras but not really used yet
  sizes: {
    XXS: `0.25rem`,
    XS: `0.5rem`,
    S: `0.75rem`,
    M: `1rem`,
    L: `1.25rem`,
    XL: `1.5rem`,
    XXL: `2rem`,
    XXXL: `4rem`,
  },
  fonts: {
    bodyFont: `"Rubik", sans-serif;`,
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    desktopL: "1440px",
  },
  custom: {
    navHeight: "95.88px",
    navHeightDesktop: "145px",
  },
}
