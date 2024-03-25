import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductosProvider } from "./context/ProductosContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductosProvider>
          <App />
        </ProductosProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
