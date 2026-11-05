import type { ReactNode } from "react";
import KeyEdge from "@/components/KeyEdge";

// Dark hero block that ends in the key-cut edge. Shared by every page.
const HeroShell = ({ children }: { children: ReactNode }) => (
  <section className="relative">
    <div className="on-ink">
      <div className="wrap pb-6 pt-6 sm:pb-12 sm:pt-14 lg:pb-14 lg:pt-20">{children}</div>
    </div>
    <KeyEdge />
  </section>
);

export default HeroShell;
