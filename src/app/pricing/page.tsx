import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PricingClient } from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing | Bankify",
  description: "Explore Bankify's simple and transparent pricing plans for individuals and businesses.",
};

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <PricingClient />
      <Footer />
    </main>
  );
}
