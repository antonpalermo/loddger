import React from "react";
import ReactDOM from "react-dom/client";

import Application from "./components/Application";

import "./main.module.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
