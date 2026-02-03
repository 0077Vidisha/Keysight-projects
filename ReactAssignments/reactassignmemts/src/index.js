import React from "react";
import ReactDOM from "react-dom/client";
import App from "./contextdemo";   // adjust path if filename is different

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
