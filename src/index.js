import React from "react";
import ReactDOM from "react-dom/client";
import CtxProvider from "./component/context/AuthContext"
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CtxProvider>
        <App />
      </CtxProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: (console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

