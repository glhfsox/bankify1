import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AlertsClient } from "./alerts-client";

export const metadata: Metadata = {
  title: "Personalized Alerts | Bankify",
  description: "Set up and manage personalized alerts for your banking activities and stay informed about your finances.",
};

export default function AlertsPage() {
  return (
    <main>
      <Navbar />
      <AlertsClient />
      <Footer />
    </main>
  );
}
