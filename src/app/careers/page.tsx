import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CareersClient } from "./careers-client";

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <CareersClient />
      <Footer />
    </main>
  );
}
