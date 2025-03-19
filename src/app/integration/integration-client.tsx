"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AnimatedSection,
  AnimatedFadeIn,
  AnimatedStaggered
} from "@/components/ui/animated-section";
import { Search, ExternalLink, Check } from "lucide-react";

type IntegrationType = "All" | "Payment" | "Analytics" | "CRM" | "Accounting" | "Security";

type Integration = {
  id: number;
  name: string;
  description: string;
  category: Exclude<IntegrationType, "All">;
  logo: string;
  features: string[];
  website: string;
};

export function IntegrationClient() {
  // Integration partners data
  const integrations = useMemo<Integration[]>(() => [
    {
      id: 1,
      name: "PayFlow",
      description: "Seamless payment processing integration that allows for quick and secure transactions across all your banking needs.",
      category: "Payment",
      logo: "https://ext.same-assets.com/2749462601/3674166325.svg+xml",
      features: [
        "Real-time transaction processing",
        "Multiple currency support",
        "Advanced fraud detection",
        "Recurring payment setup"
      ],
      website: "https://example.com/payflow"
    },
    {
      id: 2,
      name: "DataViz",
      description: "Advanced analytics platform that turns your financial data into actionable insights with powerful visualization tools.",
      category: "Analytics",
      logo: "https://ext.same-assets.com/2014953430/1584460358.svg+xml",
      features: [
        "Interactive dashboards",
        "Custom report generation",
        "Predictive analytics",
        "Data export options"
      ],
      website: "https://example.com/dataviz"
    },
    {
      id: 3,
      name: "SecureGuard",
      description: "State-of-the-art security system that protects your financial data with advanced encryption and monitoring.",
      category: "Security",
      logo: "https://ext.same-assets.com/3072638843/912907926.svg+xml",
      features: [
        "End-to-end encryption",
        "Real-time threat monitoring",
        "Compliance with financial regulations",
        "Automatic security updates"
      ],
      website: "https://example.com/secureguard"
    },
    {
      id: 4,
      name: "FinConnect",
      description: "Powerful accounting integration that simplifies financial management by connecting your banking data with your accounting software.",
      category: "Accounting",
      logo: "https://ext.same-assets.com/3403023789/2219347677.svg+xml",
      features: [
        "Automatic transaction categorization",
        "Tax preparation assistance",
        "Financial statement generation",
        "Budget tracking"
      ],
      website: "https://example.com/finconnect"
    },
    {
      id: 5,
      name: "ClientHub",
      description: "Customer relationship management platform designed specifically for financial services to help manage client interactions.",
      category: "CRM",
      logo: "https://ext.same-assets.com/1403740827/2027570977.svg+xml",
      features: [
        "Client portfolio management",
        "Communication tracking",
        "Opportunity pipeline",
        "Automated follow-ups"
      ],
      website: "https://example.com/clienthub"
    },
    {
      id: 6,
      name: "QuickPay",
      description: "Fast and reliable payment processing system designed for high-volume transactions and international payments.",
      category: "Payment",
      logo: "https://ext.same-assets.com/1406614857/1998541678.svg+xml",
      features: [
        "Instant transfers",
        "Low transaction fees",
        "Global payment support",
        "Payment status tracking"
      ],
      website: "https://example.com/quickpay"
    },
    {
      id: 7,
      name: "InsightMetrics",
      description: "Comprehensive analytics tool that provides deep insights into customer behavior and financial patterns.",
      category: "Analytics",
      logo: "https://ext.same-assets.com/1989242618/2553701947.svg+xml",
      features: [
        "Customer segmentation",
        "Behavior analysis",
        "Performance benchmarking",
        "Trend forecasting"
      ],
      website: "https://example.com/insightmetrics"
    },
    {
      id: 8,
      name: "LedgerPro",
      description: "Advanced accounting solution that streamlines bookkeeping and financial reporting for businesses of all sizes.",
      category: "Accounting",
      logo: "https://ext.same-assets.com/452837146/3626584673.svg+xml",
      features: [
        "Automated reconciliation",
        "Multi-currency ledgers",
        "Customizable reporting",
        "Audit trail"
      ],
      website: "https://example.com/ledgerpro"
    },
    {
      id: 9,
      name: "RelationManager",
      description: "Sophisticated CRM platform designed to help financial advisors manage client relationships and growth opportunities.",
      category: "CRM",
      logo: "https://ext.same-assets.com/1830290183/1711082336.svg+xml",
      features: [
        "Client lifecycle management",
        "Document storage and sharing",
        "Meeting scheduling",
        "Goal tracking"
      ],
      website: "https://example.com/relationmanager"
    }
  ], []);

  // Categories for filtering
  const categories: IntegrationType[] = ["All", "Payment", "Analytics", "CRM", "Accounting", "Security"];

  // State for filtering and search
  const [activeCategory, setActiveCategory] = useState<IntegrationType>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter integrations based on category and search query
  const filteredIntegrations = useMemo(() => {
    let results = [...integrations];

    // Filter by category
    if (activeCategory !== "All") {
      results = results.filter(integration => integration.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      results = results.filter(integration =>
        integration.name.toLowerCase().includes(query) ||
        integration.description.toLowerCase().includes(query) ||
        integration.category.toLowerCase().includes(query) ||
        integration.features.some(feature => feature.toLowerCase().includes(query))
      );
    }

    return results;
  }, [integrations, activeCategory, searchQuery]);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm text-muted-foreground mb-2 block">Integrations</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-4">
                Connect with your favorite tools
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Bankify integrates seamlessly with a wide range of financial tools and services to enhance your banking experience.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedFadeIn delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center mb-16">
              {integrations.slice(0, 5).map((integration) => (
                <div key={integration.id} className="flex items-center justify-center">
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </AnimatedFadeIn>
        </div>
      </section>

      {/* Integrations Content Section */}
      <section className="py-8 lg:py-16 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className="rounded-full"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Search Box */}
              <div className="w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search integrations..."
                    className="w-full md:w-[300px] p-3 pl-10 border rounded-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Results info */}
            {(searchQuery || activeCategory !== "All") && (
              <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredIntegrations.length} {filteredIntegrations.length === 1 ? 'integration' : 'integrations'}
                  {searchQuery && <span> for "{searchQuery}"</span>}
                  {activeCategory !== "All" && <span> in {activeCategory}</span>}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {filteredIntegrations.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No integrations found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search query or category filter
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <AnimatedStaggered className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {filteredIntegrations.map((integration) => (
                <Card key={integration.id} className="overflow-hidden border shadow-md">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-16 h-16 flex items-center justify-center bg-slate-100 rounded-lg p-2">
                        <Image
                          src={integration.logo}
                          alt={integration.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div className="bg-primary/10 px-3 py-1 rounded text-xs font-medium">
                        {integration.category}
                      </div>
                    </div>

                    <h3 className="font-semibold text-xl mb-2">
                      {integration.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {integration.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-medium">Key Features:</h4>
                      <ul className="space-y-1">
                        {integration.features.map((feature, index) => (
                          <li key={index} className="text-sm flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={integration.website} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </AnimatedStaggered>
          )}
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
                  Need a custom integration?
                </h2>
                <p className="text-lg">
                  Our team can help you create a tailored integration solution to meet your specific needs.
                </p>
                <div>
                  <Link href="/contact">
                    <Button className="bg-white text-primary hover:bg-white/90 px-6 py-2" size="lg">
                      Contact Our Team
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
