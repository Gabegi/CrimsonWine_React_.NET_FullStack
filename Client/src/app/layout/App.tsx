import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { BasketProvider } from "../features/basket/BasketContext";

function App() {
  return (
    <BasketProvider>
      <CssBaseline />
      <Navbar />
      <Outlet />
    </BasketProvider>
  );
}

export default App;
