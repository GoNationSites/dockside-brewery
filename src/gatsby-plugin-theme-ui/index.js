export default {
  breakpoints: ["768px", "1024px", "1408px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Droid Serif, serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.3,
    heading: 2,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#20bed6",
    secondary: "#20bed6",
    muted: "#fff",
  },
  images: {
    logo: {
      maxHeight: "40px",
    },
  },
  buttons: {
    nav: {
      display: ["inline-block", null, "none"],
      background: "none",
      border: "none",
      color: "muted",
      fontSize: 3,
      width: "40px",
    },
    outlined: {
      background: "transparent",
      color: "text",
      border: "1px solid",
      borderColor: "text",
      textDecoration: "none",
      "&:hover": {
        color: "primary",
        borderColor: "primary",
        transition: "all .5s",
      },
    },
  },
  text: {
    fontFamily: "body",
    itemName: {
      fontWeight: "heading",
    },
    itemDescription: {
      fontWeight: "body",
      fontSize: 1,
    },
    itemPrice: {
      fontWeight: "heading",
    },
  },
  cards: {
    menuCard: {
      maxWidth: 550,
      margin: "auto",
      bg: "muted",
      padding: 1,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
    },
  },
  box: {
    cardBox: {
      flex: ["1 1 100%", "0 1 50%", "0 1 33%"],
      paddingX: [0, 1, 2],
      paddingY: 3,
      marginRight: "auto",
    },
  },
  text: {
    menuSection: {
      color: "primary",
    },
  },
  links: {
    nav: {
      textDecoration: "none",
      color: "background",
      fontSize: 3,
      marginX: 3,
      marginY: [2, 0, 0],
      fontWeight: "heading",
      fontFamily: "body",
      textTransform: "capitalize",
      display: "inline-block",
      "&:hover:": {
        color: "primary",
        fontSize: 5,
        transition: "all 5s",
      },
    },
  },
  //   navStyles: {
  //     ...navStyles
  //   },
  //   shoutStyles: {
  //     ...shoutStyles
  //   },
  styles: {
    root: {
      margin: 0,
    },
    spinner: {
      color: "red",
    },
  },
}
