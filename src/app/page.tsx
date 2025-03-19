import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Benefits } from "@/components/benefits";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Partners } from "@/components/partners";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Process />
      <Testimonials />
      <Partners />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
