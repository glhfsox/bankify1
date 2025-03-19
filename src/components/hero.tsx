"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  AnimatedFadeIn,
  AnimatedSlideInLeft,
  AnimatedSlideInRight
} from "@/components/ui/animated-section";

export function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-8 mb-10">
          <AnimatedFadeIn delay={0.1}>
            <div className="flex items-center space-x-2 bg-muted px-4 py-1.5 rounded-full">
              <Image
                src="https://ext.same-assets.com/3523038879/39624878.svg+xml"
                alt="Star"
                width={16}
                height={16}
              />
              <Image
                src="https://ext.same-assets.com/3523038879/39624878.svg+xml"
                alt="Star"
                width={16}
                height={16}
              />
              <span className="text-xs font-medium">14,3800 Reviews</span>
            </div>
          </AnimatedFadeIn>

          <AnimatedSection delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl">
              Manage your banking and finances in one place
            </h1>
          </AnimatedSection>

          <AnimatedFadeIn delay={0.3}>
            <div className="max-w-lg">
              <p className="text-muted-foreground">Create account, Simply</p>
            </div>
          </AnimatedFadeIn>

          <AnimatedSection delay={0.4}>
            <Link href="/contact">
              <Button className="custom-button px-6 py-2" size="lg">
                Get Started
              </Button>
            </Link>
          </AnimatedSection>
        </div>

        <AnimatedFadeIn delay={0.5}>
          <div className="relative">
            <div className="bg-muted rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://ext.same-assets.com/1089355251/3670183567.png"
                alt="Banking Dashboard"
                width={1200}
                height={600}
                className="w-full"
              />
            </div>

            <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
              <div className="bg-background flex items-center gap-3 p-3 rounded-lg shadow-md">
                <p className="text-sm font-medium">We process $2 Billion+ transactions with</p>
                <div className="flex items-center">
                  <Image
                    src="https://ext.same-assets.com/1403740827/2027570977.svg+xml"
                    alt="Partner Logo 1"
                    width={70}
                    height={20}
                  />
                  <Image
                    src="https://ext.same-assets.com/1406614857/1998541678.svg+xml"
                    alt="Partner Logo 2"
                    width={70}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedFadeIn>
      </div>
    </section>
  );
}
