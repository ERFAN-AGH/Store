import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ShopCaretContextProvider from "./Components/context/ShopCaretContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ShopCaretContextProvider>
        <App />
      </ShopCaretContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
