import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactClient } from "./contact-client";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactClient />
      <Footer />
    </main>
  );
}
