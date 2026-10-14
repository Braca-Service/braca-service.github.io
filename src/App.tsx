import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CarKeys from "./pages/CarKeys";
import Locksmith from "./pages/Locksmith";
import Shoemaker from "./pages/Shoemaker";
import NotFound from "./pages/NotFound";
import { carKeyPage, locksmithPage, shoePage } from "./lib/pages";

// The router is supplied by the caller: BrowserRouter in main.tsx,
// StaticRouter in entry-server.tsx (build-time prerendering).
const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path={carKeyPage.path} element={<CarKeys />} />
    <Route path={locksmithPage.path} element={<Locksmith />} />
    <Route path={shoePage.path} element={<Shoemaker />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
