"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

export function CTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <AnimatedSection>
          <div className="bg-primary text-white p-10 md:p-16 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Image
                src="https://ext.same-assets.com/1330954442/1839032721.svg+xml"
                alt="Decoration"
                width={300}
                height={300}
              />
            </div>
            <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <Image
                  src="https://ext.same-assets.com/2467056450/1798686321.png"
                  alt="Bankify Logo"
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Your trusted easy partner in financial growth forever
              </h2>
              <div>
                <Link href="/contact">
                  <Button className="bg-white text-primary hover:bg-white/90 px-6 py-2" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <Image
                  src="https://ext.same-assets.com/3523038879/39624878.svg+xml"
                  alt="Star"
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                />
                <Image
                  src="https://ext.same-assets.com/3523038879/39624878.svg+xml"
                  alt="Star"
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                />
                <span className="text-xs font-medium">14,3800 Reviews</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
