import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TransfersClient } from "./transfers-client";

export const metadata: Metadata = {
  title: "Secure Transfers | Bankify",
  description: "Send money securely to friends, family, or businesses with Bankify's secure transfer service.",
};

export default function TransfersPage() {
  return (
    <main>
      <Navbar />
      <TransfersClient />
      <Footer />
    </main>
  );
}
