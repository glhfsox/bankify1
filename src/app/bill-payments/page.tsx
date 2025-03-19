import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BillPaymentsClient } from "./bill-payments-client";

export const metadata: Metadata = {
  title: "Bill Payments | Bankify",
  description: "Pay your bills easily and set up recurring payments with Bankify's bill payment service.",
};

export default function BillPaymentsPage() {
  return (
    <main>
      <Navbar />
      <BillPaymentsClient />
      <Footer />
    </main>
  );
}
