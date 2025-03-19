import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogsClient } from "./blogs-client";

export default function BlogsPage() {
  return (
    <main>
      <Navbar />
      <BlogsClient />
      <Footer />
    </main>
  );
}
