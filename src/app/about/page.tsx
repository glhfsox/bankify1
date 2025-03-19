import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutClient } from "./about-client";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Jason Clark",
      role: "Marketing Director",
      image: "https://ext.same-assets.com/2416297800/2121704835.jpeg"
    },
    {
      name: "Emily Hayes",
      role: "Chief Risk Officer",
      image: "https://ext.same-assets.com/3011590329/555562144.jpeg"
    },
    {
      name: "Thomas Evans",
      role: "Head of Product Development",
      image: "https://ext.same-assets.com/2439845659/1912158914.jpeg"
    }
  ];

  return (
    <main>
      <Navbar />
      <AboutClient teamMembers={teamMembers} />
      <Footer />
    </main>
  );
}
