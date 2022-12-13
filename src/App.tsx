import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/themes/theme";
import "./styles/App.css";
import Team from "./components/pages/Team_page/Team";
import TopBar from "./components/TopBar";
import NavBar from "./components/navigation/NavBar";
import { Global, css } from '@emotion/react';
import Footer from "./components/Footer.js";

const GlobalStyles = css`
.js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

export const App = () => {
  return (
      <ChakraProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <TopBar/>
        <Team/>
        <NavBar/>
        <Footer/>
      </ChakraProvider>
  );
};
