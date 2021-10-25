import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { RootContextProvider } from "./Context/RootContext";

ReactDOM.render(
  <BrowserRouter>
    <RootContextProvider>
      <App />
    </RootContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
