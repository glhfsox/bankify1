"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedFadeIn, AnimatedStaggered } from "@/components/ui/animated-section";

export function Partners() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Seamless integrations with your favorite tools
            </h2>
            <p className="mt-4 text-muted-foreground">
              Build custom portals, CRM's and tools effortlessly from concept to launch in minutes, not months
            </p>
            <div className="mt-6">
              <Link href="/integration">
                <Button variant="outline" className="px-6 py-2">
                  Explore All
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedStaggered
          className="grid grid-cols-3 gap-8 place-items-center"
          staggerDelay={0.2}
        >
          <Image
            src="https://ext.same-assets.com/2749462601/3674166325.svg+xml"
            alt="Partner Logo 1"
            width={80}
            height={80}
          />
          <Image
            src="https://ext.same-assets.com/2014953430/1584460358.svg+xml"
            alt="Partner Logo 2"
            width={80}
            height={80}
          />
          <Image
            src="https://ext.same-assets.com/3072638843/912907926.svg+xml"
            alt="Partner Logo 3"
            width={80}
            height={80}
          />
        </AnimatedStaggered>
      </div>
    </section>
  );
}
