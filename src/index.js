/*Copyright (c) 2023 Promineo Tech
    Author:  Promineo Tech Academic Team
    Subject: React Router Boiler Plate
-------------------------------------------*/

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Auth/AuthContext";
import App from "./App";
import "./Index.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
