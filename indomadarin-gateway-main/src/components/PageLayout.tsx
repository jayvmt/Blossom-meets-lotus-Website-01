import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-18">{children}</main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
