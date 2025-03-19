import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SignupClient } from "./signup-client";

export const metadata: Metadata = {
  title: "Sign Up | Bankify",
  description: "Create a new Bankify account to access our comprehensive financial services.",
};

export default function SignupPage() {
  return (
    <main>
      <Navbar />
      <SignupClient />
      <Footer />
    </main>
  );
}
