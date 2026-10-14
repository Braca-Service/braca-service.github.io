import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export { structuredData } from "./lib/structuredData";
export { pages } from "./lib/pages";
export { siteUrl } from "./lib/business";

export const render = (url: string) =>
  renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
