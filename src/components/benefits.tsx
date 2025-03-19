"use client";

import Image from "next/image";
import { AnimatedSection, AnimatedStaggered } from "@/components/ui/animated-section";

export function Benefits() {
  const benefits = [
    {
      title: "Transaction Monitoring",
      description: "Track and review in real-time to stay on top of your finances."
    },
    {
      title: "Spending Analysis",
      description: "Gain insights into your spending with simple breakdown"
    },
    {
      title: "Account Balances",
      description: "Check your balances instantly to stay updated on your status."
    },
    {
      title: "Bill Payment",
      description: "Set reminders for upcoming bills to ensure timely payments"
    },
    {
      title: "Secure Transfers",
      description: "Make secure and quick transfers between accounts with ease"
    },
    {
      title: "Personalized Alerts",
      description: "Receive notifications for key activities, helping you stay informed"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How our features improve your financial experience
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedStaggered className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center space-y-4"
            >
              <div className="bg-primary/10 p-3 rounded-md">
                <Image
                  src="https://ext.same-assets.com/4108833165/2716823036.svg+xml"
                  alt={benefit.title}
                  width={24}
                  height={24}
                  className="text-primary"
                />
              </div>
              <h3 className="font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </AnimatedStaggered>
      </div>
    </section>
  );
}
