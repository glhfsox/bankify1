import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DashboardClient } from "./dashboard-client";

export const metadata: Metadata = {
  title: "Dashboard | Bankify",
  description: "Manage your accounts, track expenses, and monitor financial activities all in one place.",
};

export default function DashboardPage() {
  return (
    <main>
      <Navbar />
      <DashboardClient />
      <Footer />
    </main>
  );
}
