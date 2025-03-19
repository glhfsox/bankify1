import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeaturesClient } from "./features-client";

export default function FeaturesPage() {
  return (
    <main>
      <Navbar />
      <FeaturesClient />
      <Footer />
    </main>
  );
}
