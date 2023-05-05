import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/Store.js";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './Theme/theme/theme.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
    <ChakraProvider theme={theme} resetCss={false} position="relative" >
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
