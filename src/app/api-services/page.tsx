import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ApiServicesClient } from "./api-services-client";

export const metadata: Metadata = {
  title: "API Services | Bankify",
  description: "Explore Bankify's powerful banking and financial API services for developers and businesses.",
};

export default function ApiServicesPage() {
  return (
    <main>
      <Navbar />
      <ApiServicesClient />
      <Footer />
    </main>
  );
}
