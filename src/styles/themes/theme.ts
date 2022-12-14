import { extendTheme } from "@chakra-ui/react";
// import  {boxStyles as Box} from "./components/boxStyles"
import  {drawerStyles as Drawer} from "./components/drawerStyles"
import { buttonStyles as Button } from "./components/buttonStyles";

export const theme = extendTheme(
  {
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
    colors: {
      primary: {
        100: "#ad72e0",
        200: "#9a65c7",
        300: "#7d54a1",
        400: "#5f407a",
        450: "#482e5e",
        500: "#141E61",
        default: "#141E61",
      },
      secondary: {
        100: "#c37fc9",
        200: "#ad46bd",
        300: "#a202ba",
        400: "#6f0380",
        500: "#310138",
        default: "#8e02a3",
      },
      highlight: {
          100: "#ffffff",
          200: "#fefaff",
          300: "#f5f5f5",
          400: "#f3f2f4",
          500: "#eeebf0"
        },
      darkHighlight: "#2a262c",
      link: "#c96cff",
    },
    components: {
      // Box: {
      //   baseStyle: ({ colorMode }) => ({
      //     bg: colorMode === "dark" ? "green" : "green.500",
      //     color: colorMode === "dark" ? "gray.800" : "white",
      //     textTransform: "uppercase",
      //     fontWeight: "semibold",
      //     letterSpacing: "0.02em",
      //     padding: "4px",
      //     borderRadius: "2px",
      //     fontSize: "12px",
      //   }),
      // },
      Button,
      Drawer,
    },
  }
);
