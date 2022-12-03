import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/themes/theme";
import "./styles/App.css";
import Team from "./components/pages/Team_page/Team";
import { Global, css } from '@emotion/react'

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
        <Team/>
      </ChakraProvider>
  );
};
