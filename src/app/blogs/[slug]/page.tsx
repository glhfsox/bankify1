import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return [
    { slug: 'digital-banking-trends-2023' },
    { slug: 'maximizing-financial-security' },
    { slug: 'future-of-fintech' }
  ];
}

export default function BlogPostPage({ params }: Props) {
  return (
    <main className="py-12">
      <div className="container">
        <Link href="/blogs" className="inline-flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All Blogs
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 capitalize">
              {params.slug.replace(/-/g, " ")}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <span>March 12, 2023</span>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>

          <div className="mb-8 rounded-xl overflow-hidden aspect-video relative">
            <Image
              src={`https://source.unsplash.com/random/1200x630?finance,${params.slug}`}
              alt={params.slug}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Financial institutions are evolving rapidly in response to changing customer expectations and technological advancements. The rise of digital banking has transformed how customers interact with their banks, creating opportunities for more personalized, efficient, and accessible financial services.
            </p>

            <h2>The Evolution of Digital Banking</h2>
            <p>
              Digital banking has come a long way from simple online account access. Today, comprehensive platforms offer everything from budgeting tools to investment management, creating a one-stop solution for all financial needs.
            </p>

            <h2>Key Technologies Driving Change</h2>
            <p>
              Several technologies are at the forefront of the banking revolution:
            </p>
            <ul>
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Blockchain and Distributed Ledger Technology</li>
              <li>Open Banking APIs</li>
              <li>Advanced Data Analytics</li>
            </ul>

            <h2>The Role of Personalization</h2>
            <p>
              Modern banking customers expect personalized experiences that address their unique financial needs. AI-powered insights can analyze spending patterns, income flows, and financial goals to provide customized recommendations and automated savings strategies.
            </p>

            <h2>Security Considerations</h2>
            <p>
              As banking becomes more digital, security concerns have grown. Financial institutions are responding with multi-factor authentication, biometric verification, and advanced fraud detection systems to ensure customer data remains protected.
            </p>

            <h2>Looking Ahead</h2>
            <p>
              The future of banking will likely be marked by even greater integration between financial services and daily life, with embedded finance making transactions seamless across platforms and services.
            </p>

            <h2>Conclusion</h2>
            <p>
              For banks to remain competitive in this rapidly evolving landscape, investment in technology infrastructure and a focus on customer-centric design will be essential. The institutions that successfully blend innovative technology with personalized service will lead the next generation of financial services.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blogs/digital-banking-trends-2023" className="group">
                <div className="rounded-lg overflow-hidden mb-3 aspect-video relative">
                  <Image
                    src="https://source.unsplash.com/random/600x400?finance,banking"
                    alt="Related article"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h4 className="font-medium group-hover:text-primary transition-colors">
                  Digital Banking Trends for 2023
                </h4>
              </Link>
              <Link href="/blogs/maximizing-financial-security" className="group">
                <div className="rounded-lg overflow-hidden mb-3 aspect-video relative">
                  <Image
                    src="https://source.unsplash.com/random/600x400?security,finance"
                    alt="Related article"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h4 className="font-medium group-hover:text-primary transition-colors">
                  Maximizing Financial Security in a Digital Age
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
