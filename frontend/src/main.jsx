import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ViewProvider } from "./utils/ViewContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ViewProvider>
      <App />
    </ViewProvider>
  </BrowserRouter>
);
