import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ForgotPasswordClient } from "./forgot-password-client";

export const metadata: Metadata = {
  title: "Forgot Password | Bankify",
  description: "Reset your Bankify account password.",
};

export default function ForgotPasswordPage() {
  return (
    <main>
      <Navbar />
      <ForgotPasswordClient />
      <Footer />
    </main>
  );
}
