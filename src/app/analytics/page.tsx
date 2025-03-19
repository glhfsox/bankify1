import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnalyticsClient } from "./analytics-client";

export const metadata: Metadata = {
  title: "Financial Analytics | Bankify",
  description: "Track your spending, monitor transactions, and get insights into your financial behavior.",
};

export default function AnalyticsPage() {
  return (
    <main>
      <Navbar />
      <AnalyticsClient />
      <Footer />
    </main>
  );
}
