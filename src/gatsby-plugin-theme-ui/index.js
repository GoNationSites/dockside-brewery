export default {
  // ======== base styles ========

  colors: {
    text: "#333",
    background: "#fff",
    primary: "#3c7780",
    secondary: "#ff6347",
    light: "#FFF",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ["480px", "768px", "1024px", "1500px", "2000px"],
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Lato, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    default: {
      color: "text",
      fontSize: 2,
      fontFamily: "body",
      marginBottom: 3,
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      marginBottom: "3",
    },
    light: {
      color: "light",
      fontSize: 2,
      fontFamily: "body",
      marginBottom: 3,
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      textTransform: "capitalize",
      color: "text",
      fontSize: 3,
      marginBottom: 3,
      textAlign: "center",
    },
    headingLight: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      textTransform: "capitalize",
      color: "light",
      fontSize: 3,
      marginBottom: 3,
    },
    h1: {
      color: "light",
      fontFamily: "heading",
      fontSize: 6,
      textAlign: "center",
    },
    h2: {
      color: "text",
      marginTop: 0,
      fontFamily: "heading",
      marginBottom: 3,
      fontSize: 5,
      textAlign: "center",
    },
    businessHeading: {
      color: "light",
      fontFamily: "heading",
      fontSize: 6,
      textAlign: "center",
    },
    sectionHeading: {
      color: "text",
      marginTop: 0,
      fontFamily: "heading",
      marginBottom: 3,
      fontSize: [5, 5, 6],
      textAlign: "center",
      fontWeight: "bolder",
    },
  },

  styles: {
    h1: {
      color: "light",
      fontFamily: "heading",
      fontSize: 6,
      marginY: 3,
      textAlign: "center",
    },
    h2: {
      color: "text",
      marginTop: 0,
      fontFamily: "heading",
      marginBottom: 3,
      fontSize: [5, 5, 6],
      textAlign: "center",
    },
    a: {
      color: "light",
      marginTop: 1,
      marginBottom: 1,
      display: "inline-block",
      textDecoration: "none",
    },
    spinner: {
      color: "primary",
    },
  },

  // form styles
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
      color: "light",
      marginBottom: 1,
    },
    label: {
      fontFamily: "heading",
      color: "light",
      marginBottom: 1,
    },
    input: {
      borderColor: "light",
      "&:focus": {
        borderColor: "secondary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    select: {
      borderColor: "light",
      "&:focus": {
        borderColor: "secondary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      borderColor: "light",
      "&:focus": {
        borderColor: "secondary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    slider: {
      bg: "muted",
    },
  },

  // button styles
  buttons: {
    primary: {
      // you can reference other values defined in the theme
      color: "light",
      bg: "primary",
      cursor: "pointer",
      borderColor: "primary",
      borderWidth: "1px",
      borderStyle: "solid",
      "&:hover": {
        filter: "brightness(75%)",
        borderColor: "text",
      },
    },
    secondary: {
      color: "light",
      bg: "secondary",
      cursor: "pointer",
      borderColor: "secondary",
      borderWidth: "1px",
      borderStyle: "solid",
      "&:hover": {
        filter: "brightness(75%)",
        borderColor: "secondary",
      },
    },
  },

  // ============================
  // =====  custom styling  =====
  // ============================

  // high level styles
  page: {
    section: {
      marginBottom: 4,
    },
  },

  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
  },

  // HERO Styles
  hero: {
    container: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "60vh",
      bg: "primary",
    },
    logo: {
      height: "100%",
      maxHeight: "150px",
      margin: "0 auto",
    },
  },

  // Shout Styles
  shout: {
    container: {
      marginBottom: 4,
      maxWidth: "600px",
      margin: "-50px auto 20px",
      bg: "secondary",
      borderRadius: ["0px", "0px", "10px"],
      padding: 2,
    },
    innerContainer: {
      alignItems: "stretch",
    },
    imageContainer: {
      display: "flex",
      width: "25%",
    },
    shoutImage: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
    content: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      paddingX: 3,
    },
  },

  // Gallery Styles
  gallery: {
    albumsContainer: {
      width: "100%",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    albumsCTA: {
      width: ["100%", "48%", "24%"],
      margin: [0, "1%"],
      marginBottom: ["1%"],
      height: "300px",
      cursor: "pointer",
      backgroundSize: "cover",
      alignItems: "center",
      justifyContent: "center",
    },
    albumTitle: {
      color: "white",
      textShadow: "2px 2px black",
      fontSize: 5,
    },
    albumContainer: {
      flexWrap: "wrap",
      alignItems: "stretch",
      margin: "1rem auto",
      justifyContent: "center",
    },
    albumImage: {
      width: ["50%", "33%", "25%", "20%"],
      objectFit: "cover",
      height: "200px",
      padding: 1,
    },
  },

  // Events Styles

  event: {
    eventsContainer: {
      justifyContent: "center",
      flexWrap: "wrap",
    },
    eventItemContainer: {
      margin: ["1%"],
      width: ["48%", "31%", "23%", "18%"],
      flexDirection: "column",
    },
    eventItemImage: {
      minHeight: "250px",
      maxHeight: "300px",
      objectFit: "cover",
    },
    eventItemContent: {
      flexGrow: "1",
      paddingTop: 2,
      paddingBottom: 2,
      flexDirection: ["column", "row"],
    },
    eventItemTitle: {
      fontSize: 3,
      textTransform: "capitalize",
      textAlign: "left",
      fontWeight: "bolder",
      fontFamily: "heading",
    },
    eventItemDateContainer: {
      textAlign: ["left", "center"],
      maxWidth: "50px",
      maxHeight: "50px",
      minWidth: "unset",
      marginRight: [0, 1],
    },
    eventDate: {
      fontSize: 3,
      color: "primary",
      fontWeight: "bolder",
      width: "100%",
      marginBottom: 0,
      fontFamily: "body",
    },
    eventMonth: {
      textTransform: "uppercase",
      marginBottom: 0,
      width: "100%",
      fontFamily: "body",
    },
    modalContainer: {
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
    },
    modalBackground: {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modal: {
      padding: 0,
      maxWidth: "767px",
      zIndex: "1000",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      color: "black",
      backgroundColor: "primary",
      minWidth: "280px",
      border: "solid 6px white",
    },
    modalImage: {
      maxHeight: ["175px", "250px", "500px"],
      width: "100%",
      objectFit: "cover",
    },

    modalContentContainer: {
      padding: 3,
      color: "white",
    },

    modalEventName: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      textTransform: "capitalize",
      color: "text",
      fontSize: 3,
      marginBottom: 3,
      color: "white",
      textAlign: "left",
    },
    modalEventDate: {
      alignItems: "center",
      marginBottom: 3,
    },
  },

  // Menu Styles
  menu: {
    container: { border: "2px solid black", padding: [2, 3] },
    sectionTitle: {
      color: "primary",
      marginTop: 0,
      fontFamily: "heading",
      marginBottom: 3,
      fontSize: [5, 5, 6],
      textAlign: "center",
    },
    sectionContainer: {
      alignItems: "stretch",
      flexWrap: "wrap",
    },
    menuItemContainer: {
      width: ["100%", "100%", "50%"],
      marginBottom: 3,
    },
    menuItemInnerContainer: {
      marginBottom: 3,
      height: "100%",
      flexDirection: "column",
      backgroundColor: "white",
    },
    menuItemImage: {
      width: "100%",
      objectFit: "cover",
    },
    menuItemDefaultImage: {
      width: "100%",
      objectFit: "contain",
      objectPosition: "top",
    },
    menuItemContentContainer: {
      padding: 2,
      flexGrow: "1",
    },
    menuPriceContainer: {
      flexGrow: "1",
      marginLeft: 3,
      marginBottom: 2,
    },

    headingMenuSection: {
      textAlign: "center",
      fontSize: 5,
      fontFamily: "heading",
      fontWeight: "bolder",
      marginBottom: 4,
    },
    menuItemName: {
      fontSize: 3,
      fontFamily: "heading",
      fontWeight: "bolder",
      marginBottom: 2,
    },
    menuItemDescription: {
      fontSize: 2,
      fontFamily: "heading",
    },

    menuItemPriceLabel: {
      fontSize: 2,
      fontFamily: "heading",
    },
    menuItemPrice: {
      fontSize: 3,
      fontFamily: "heading",
      fontWeight: "bolder",
      color: "primary",
      flexGrow: "1",
      textAlign: "right",
    },
    menuItemPriceVariants: {
      fontSize: 2,
      fontFamily: "heading",
      fontWeight: "bolder",
      color: "primary",
    },
  },

  // Hours

  hours: {
    container: {
      flexDirection: "column",
      color: "white",
      fontFamily: "heading",
      flexGrow: "1",
      width: "100%",
      maxWidth: "400px",
      padding: [2, 2, 2, 4],
    },

    labelHeading: {
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: 3,
      marginBottom: 3,
      marginBottom: 1,
      textTransform: "uppercase",
      fontSize: 2,
    },
    hoursEntry: {
      width: "100%",
      flexDirection: ["row", "row", "row"],
      marginBottom: 0,
    },
    dayLabel: {
      flexGrow: "1",
      marginBottom: 0,
      fontSize: 1,
      textTransform: "uppercase",
    },
    timeLabel: {
      textAlign: "right",
      marginBottom: 0,
      fontSize: 1,
    },
  },

  // Footer Styles

  footer: {
    backgroundColor: "black",
    padding: 4,
    paddingBottom: 5,
    flexDirection: ["column", "column", "row"],

    heading: {
      color: "text",
      marginTop: 0,
      fontFamily: "heading",
      marginBottom: 3,
      fontSize: 5,
      textAlign: "center",
      color: "light",
      textAlign: ["center", "center", "left"],
    },
  },
}
