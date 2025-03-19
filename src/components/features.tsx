"use client";

import Image from "next/image";
import Link from "next/link";
import { CreditCard, DollarSign, BarChart, ArrowRight, Bell, Shield, ChevronsUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedFadeIn } from "./ui/animated-section";

const features = [
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Transaction Monitoring",
    description: "Track your spending in real-time with detailed transaction history and categorization.",
    color: "bg-blue-50",
    link: "/dashboard"
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Spending Analysis",
    description: "Gain insights into your spending habits with visual breakdowns by category and merchant.",
    color: "bg-green-50",
    link: "/analytics"
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Account Balances",
    description: "View all your account balances in one place with real-time updates and balance history.",
    color: "bg-purple-50",
    link: "/dashboard"
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Bill Payment",
    description: "Pay your bills on time with scheduled payments and payment reminders.",
    color: "bg-amber-50",
    link: "/dashboard"
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure Transfers",
    description: "Send money securely to friends, family, or businesses with bank-level encryption.",
    color: "bg-red-50",
    link: "/transfers"
  },
  {
    icon: <Bell className="h-10 w-10 text-primary" />,
    title: "Personalized Alerts",
    description: "Stay informed with customizable alerts for account activity, balances, and suspicious transactions.",
    color: "bg-indigo-50",
    link: "/alerts"
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All-in-One Banking Solution
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of banking with our comprehensive suite of tools designed to simplify your financial life.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedFadeIn key={index} delay={index * 0.1} className="flex">
              <Link href={feature.link} className="flex flex-1">
                <div className={`rounded-lg p-6 ${feature.color} flex-1 group hover:shadow-md transition-all duration-300`}>
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="flex items-center text-primary font-medium group-hover:text-primary/80">
                    Explore <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimatedFadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="custom-button" asChild>
            <Link href="/dashboard">
              Explore All Features
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
