import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TeamClient } from "./team-client";

export default function TeamPage() {
  return (
    <main>
      <Navbar />
      <TeamClient />
      <Footer />
    </main>
  );
}
