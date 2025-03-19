"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  AnimatedSection,
  AnimatedFadeIn,
  AnimatedStaggered
} from "@/components/ui/animated-section";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Set up your account",
      description: "Create an account quickly and securely to get started. Simply enter your details and link"
    },
    {
      number: "02",
      title: "Track and manage transactions",
      description: "Monitor your transactions in real-time, categorize expenses, and view detailed spending insights"
    },
    {
      number: "03",
      title: "Stay informed and take action",
      description: "Receive personalized alerts, set financial goals, and take action with smart tools"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase mb-2 block">How it works</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              How our process ensures a seamless banking experience
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedStaggered className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4 flex flex-col">
                <span className="text-primary font-bold text-lg">{step.number}</span>
                <h3 className="text-lg font-semibold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-4 -right-4 z-10">
                  <div className="h-0.5 w-8 bg-slate-200"></div>
                </div>
              )}
            </div>
          ))}
        </AnimatedStaggered>

        <AnimatedFadeIn delay={0.6} className="mt-20">
          <Card className="overflow-hidden border-0 shadow-lg">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="flex items-center space-x-2 mb-6">
                <Image
                  src="https://ext.same-assets.com/3523038879/39624878.svg+xml"
                  alt="Star"
                  width={20}
                  height={20}
                />
                <Image
                  src="https://ext.same-assets.com/3523038879/39624878.svg+xml"
                  alt="Star"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-xl md:text-2xl font-medium max-w-3xl mb-4">
                I explored the banking features, and these tools are outstanding! Worth every investment.
              </p>
              <p className="text-muted-foreground">Artem Pashchenko and Piotr Kharashkevich</p>
            </CardContent>
          </Card>
        </AnimatedFadeIn>
      </div>
    </section>
  );
}
