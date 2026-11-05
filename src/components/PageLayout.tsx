import { useEffect, type ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import type { PageMeta } from "@/lib/pages";

// The production <head> is written by scripts/prerender.js; this keeps the
// title right in dev and if the router ever navigates client-side.
const PageLayout = ({ page, children }: { page: PageMeta; children: ReactNode }) => {
  useEffect(() => {
    document.title = page.title;
  }, [page.title]);

  // Safety net: if the "not found" page is ever rendered on a URL that was
  // served with status 200, tell search engines not to index it.
  useEffect(() => {
    if (page.noindex) document.querySelector('meta[name="robots"]')?.setAttribute("content", "noindex, follow");
  }, [page.noindex]);

  return (
    <div className="min-h-screen flex flex-col pb-20 sm:pb-0">
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default PageLayout;
