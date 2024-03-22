import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductosProvider } from "./context/ProductosContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductosProvider>
      <App />
    </ProductosProvider>
  </React.StrictMode>
);
