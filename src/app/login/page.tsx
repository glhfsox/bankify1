import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoginClient } from "./login-client";

export const metadata: Metadata = {
  title: "Login | Bankify",
  description: "Log in to your Bankify account to access your banking services.",
};

export default function LoginPage() {
  return (
    <main>
      <Navbar />
      <LoginClient />
      <Footer />
    </main>
  );
}
