import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { IntegrationClient } from "./integration-client";

export default function IntegrationPage() {
  return (
    <main>
      <Navbar />
      <IntegrationClient />
      <Footer />
    </main>
  );
}
