"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AnimatedSection,
  AnimatedFadeIn,
  AnimatedSlideInLeft,
  AnimatedSlideInRight,
  AnimatedStaggered
} from "@/components/ui/animated-section";

export function FeaturesClient() {
  const features = [
    {
      icon: "https://ext.same-assets.com/4108833165/2716823036.svg+xml",
      title: "Transaction Monitoring",
      description: "Track and review in real-time to stay on top of your finances."
    },
    {
      icon: "https://ext.same-assets.com/4108833165/2716823036.svg+xml",
      title: "Spending Analysis",
      description: "Gain insights into your spending with simple breakdown"
    },
    {
      icon: "https://ext.same-assets.com/4108833165/2716823036.svg+xml",
      title: "Account Balances",
      description: "Check your balances instantly to stay updated on your status."
    },
    {
      icon: "https://ext.same-assets.com/4108833165/2716823036.svg+xml",
      title: "Bill Payment",
      description: "Set reminders for upcoming bills to ensure timely payments"
    },
    {
      icon: "https://ext.same-assets.com/4108833165/2716823036.svg+xml",
      title: "Secure Transfers",
      description: "Make secure and quick transfers between accounts with ease"
    },
    {
      icon: "https://ext.same-assets.com/4108833165/2716823036.svg+xml",
      title: "Personalized Alerts",
      description: "Receive notifications for key activities, helping you stay informed"
    }
  ];

  const toolsAndIntegrations = [
    {
      icon: "https://ext.same-assets.com/2749462601/3674166325.svg+xml",
      title: "API Integration",
      description: "Connect with various financial services using our robust API."
    },
    {
      icon: "https://ext.same-assets.com/2014953430/1584460358.svg+xml",
      title: "Data Visualization",
      description: "View your financial data with powerful visual tools."
    },
    {
      icon: "https://ext.same-assets.com/3072638843/912907926.svg+xml",
      title: "Export & Import",
      description: "Easily export or import your financial data in various formats."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm text-muted-foreground mb-2 block">Features</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-4">
                Powerful tools for your financial journey
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the comprehensive set of features that make Bankify the ideal solution for managing your finances.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedFadeIn delay={0.3}>
            <div className="rounded-2xl overflow-hidden mb-20">
              <Image
                src="https://ext.same-assets.com/1089355251/3670183567.png"
                alt="Banking Dashboard"
                width={1200}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </AnimatedFadeIn>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-muted-foreground uppercase mb-2 block">Core Features</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Essential features to manage your finances
              </h2>
              <p className="text-muted-foreground">
                Bankify offers a comprehensive suite of features designed to simplify financial management
                and provide you with the insights you need.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedStaggered className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden border shadow-sm">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-md w-fit mb-4">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </AnimatedStaggered>
        </div>
      </section>

      {/* Transaction Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSlideInLeft>
              <div>
                <span className="text-sm font-medium text-muted-foreground uppercase mb-2 block">Transaction Management</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Stay on top of your finances with detailed tracking
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our transaction management tools provide real-time insights into your spending habits,
                  helping you make informed decisions about your finances.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-1 h-fit">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Real-time tracking</h3>
                      <p className="text-muted-foreground text-sm">
                        Monitor your expenses as they happen with instant notifications
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-1 h-fit">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Categorization</h3>
                      <p className="text-muted-foreground text-sm">
                        Automatically categorize your transactions for easier budgeting
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-1 h-fit">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Search and filter</h3>
                      <p className="text-muted-foreground text-sm">
                        Quickly find specific transactions with powerful search tools
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="custom-button px-6 py-2">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSlideInLeft>

            <AnimatedSlideInRight delay={0.3}>
              <Card className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="p-6 space-y-4">
                    <div className="bg-primary/10 p-2 w-fit rounded">
                      <span className="text-sm font-medium">Transaction</span>
                    </div>
                    <h3 className="text-xl font-semibold">Stay on top of your weekly assets</h3>
                    <p className="text-muted-foreground text-sm">
                      Track and manage your weekly transactions effortlessly. Get a clear overview of all your spendings.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">weekly transactions</span>
                      <span className="text-green-500 text-sm font-medium">+23%</span>
                    </div>

                    <div className="text-2xl font-bold mb-4">$10,000</div>

                    <div className="grid grid-cols-5 gap-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="bg-primary/20 h-20 w-full rounded relative overflow-hidden">
                            <div
                              className="absolute bottom-0 bg-primary w-full"
                              style={{ height: `${Math.floor(Math.random() * 70) + 20}%` }}
                            ></div>
                          </div>
                          <span className="text-xs mt-1">Sun</span>
                          <span className="text-xs">12</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSlideInRight>
          </div>
        </div>
      </section>

      {/* Tools & Integrations Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-muted-foreground uppercase mb-2 block">Tools & Integrations</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Seamlessly connect with your favorite tools
              </h2>
              <p className="text-muted-foreground">
                Bankify integrates with a wide range of financial tools and services to provide
                a comprehensive financial management experience.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedStaggered className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {toolsAndIntegrations.map((tool, index) => (
              <Card key={index} className="overflow-hidden border shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-md w-fit mb-4">
                    <Image
                      src={tool.icon}
                      alt={tool.title}
                      width={32}
                      height={32}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{tool.title}</h3>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </AnimatedStaggered>

          <AnimatedFadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <Link href="/integration">
                <Button variant="outline" className="px-6 py-2">
                  Explore All Integrations
                </Button>
              </Link>
            </div>
          </AnimatedFadeIn>
        </div>
      </section>

      {/* CTA Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to take control of your finances?
                </h2>
                <p className="text-lg">
                  Join thousands of users who have transformed their financial management with Bankify.
                </p>
                <div>
                  <Link href="/contact">
                    <Button className="bg-white text-primary hover:bg-white/90 px-6 py-2" size="lg">
                      Get Started Today
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
