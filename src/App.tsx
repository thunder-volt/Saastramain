import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/themes/theme";
import "./styles/App.css";
import Loader from "./components/shared/Loader";
import { Global, css } from '@emotion/react'

const AppRoutes = React.lazy(() => import("./components/AppRoutes"));

const GlobalStyles = css`
.js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

export const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <ChakraProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <AppRoutes />
      </ChakraProvider>
    </React.Suspense>
  );
};
