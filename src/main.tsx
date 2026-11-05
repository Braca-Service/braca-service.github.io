import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/zilla-slab/600.css";
import "@fontsource/zilla-slab/700.css";
import "@fontsource-variable/atkinson-hyperlegible-next";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages also serves every page at ".../index.html" (e.g. /index.html,
// /autoschluessel-luzern/index.html). The router only knows the directory URL
// and would replace the prerendered page with "Seite nicht gefunden", which
// Google reports as a soft 404. Show the directory URL before rendering.
const { pathname, search, hash } = window.location;
if (pathname.endsWith("/index.html")) {
  window.history.replaceState(window.history.state, "", pathname.slice(0, -"index.html".length) + search + hash);
}

const container = document.getElementById("root")!;
const app = (
  <BrowserRouter basename={import.meta.env.BASE_URL ?? "/"}>
    <App />
  </BrowserRouter>
);

// Production HTML is prerendered (scripts/prerender.js); hydrate it instead of re-rendering.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
