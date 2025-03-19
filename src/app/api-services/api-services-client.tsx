"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedSection, AnimatedFadeIn, AnimatedStaggered } from "@/components/ui/animated-section";
import { Code, Copy, ChevronRight, Check, ExternalLink, Lock, Zap, Database, CreditCard, PieChart, Wallet, Users } from "lucide-react";
import { ApiDemo } from "@/components/api-demo";

// Sample API examples
const apiExamples = {
  authentication: `// Install the SDK
npm install @bankify/api-sdk

// Initialize with your API key
import { BankifyAPI } from '@bankify/api-sdk';

const bankify = new BankifyAPI({
  apiKey: 'your_api_key',
  environment: 'sandbox' // or 'production'
});

// Authenticate a user
const authResponse = await bankify.auth.createToken({
  userId: 'user123',
  scope: ['accounts:read', 'transactions:read']
});

console.log(authResponse.token);`,

  accounts: `// List all accounts for a user
const accounts = await bankify.accounts.list({
  userId: 'user123',
  limit: 10,
  offset: 0
});

console.log(accounts.data);

// Get a specific account
const account = await bankify.accounts.get({
  accountId: 'acc_12345'
});

console.log(account);`,

  transactions: `// List transactions for an account
const transactions = await bankify.transactions.list({
  accountId: 'acc_12345',
  dateFrom: '2023-01-01',
  dateTo: '2023-12-31',
  limit: 25,
  offset: 0
});

console.log(transactions.data);

// Get a specific transaction
const transaction = await bankify.transactions.get({
  transactionId: 'txn_67890'
});

console.log(transaction);`,

  payments: `// Create a payment
const payment = await bankify.payments.create({
  sourceAccountId: 'acc_12345',
  destinationAccountId: 'acc_67890',
  amount: {
    value: 100.50,
    currency: 'USD'
  },
  description: 'Payment for services'
});

console.log(payment);`
};

export function ApiServicesClient() {
  const [activeCode, setActiveCode] = useState("authentication");
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [key]: true });

    setTimeout(() => {
      setCopiedStates({ ...copiedStates, [key]: false });
    }, 2000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm text-muted-foreground mb-2 block">Developer Hub</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-4">
                Powerful API for Financial Services
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Integrate banking capabilities into your applications with our secure and reliable APIs.
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <Button size="lg" className="custom-button">
                  Get API Keys
                </Button>
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedFadeIn>
            <div className="relative mx-auto max-w-4xl">
              <div className="bg-slate-900 text-white rounded-lg p-4 shadow-xl">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div>
                    <button
                      onClick={() => copyToClipboard(apiExamples[activeCode as keyof typeof apiExamples], activeCode)}
                      className="text-slate-400 hover:text-white"
                    >
                      {copiedStates[activeCode] ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <Tabs defaultValue="authentication" value={activeCode} onValueChange={setActiveCode}>
                  <TabsList className="bg-slate-800 mb-4">
                    <TabsTrigger value="authentication">Authentication</TabsTrigger>
                    <TabsTrigger value="accounts">Accounts</TabsTrigger>
                    <TabsTrigger value="transactions">Transactions</TabsTrigger>
                    <TabsTrigger value="payments">Payments</TabsTrigger>
                  </TabsList>

                  {Object.entries(apiExamples).map(([key, code]) => (
                    <TabsContent key={key} value={key} className="mt-0">
                      <pre className="text-sm overflow-x-auto font-mono">
                        <code>{code}</code>
                      </pre>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </AnimatedFadeIn>
        </div>
      </section>

      {/* API Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Financial API Suite
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive API platform provides everything you need to build powerful financial applications.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedFadeIn delay={0.1}>
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Authentication</CardTitle>
                  <CardDescription>
                    Secure user authentication and authorization with OAuth 2.0 and multi-factor authentication.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Link href="#" className="text-primary flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedFadeIn>

            <AnimatedFadeIn delay={0.2}>
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Account Management</CardTitle>
                  <CardDescription>
                    Create, read, update, and manage banking accounts with real-time balance information.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Link href="#" className="text-primary flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedFadeIn>

            <AnimatedFadeIn delay={0.3}>
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Payment Processing</CardTitle>
                  <CardDescription>
                    Process payments, transfers, and transactions securely across multiple currencies.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Link href="#" className="text-primary flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedFadeIn>

            <AnimatedFadeIn delay={0.4}>
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <PieChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Data Analytics</CardTitle>
                  <CardDescription>
                    Gain insights into transaction patterns, spending habits, and financial trends.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Link href="#" className="text-primary flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedFadeIn>

            <AnimatedFadeIn delay={0.5}>
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Digital Wallets</CardTitle>
                  <CardDescription>
                    Create and manage digital wallets for seamless payment experiences across platforms.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Link href="#" className="text-primary flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedFadeIn>

            <AnimatedFadeIn delay={0.6}>
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    Create and manage user profiles with robust KYC and AML compliance features.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Link href="#" className="text-primary flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedFadeIn>
          </div>
        </div>
      </section>

      {/* Live API Testing Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Try Our API Live
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experiment with our API endpoints in a sandbox environment before integrating into your application.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Authentication API Example */}
            <AnimatedFadeIn delay={0.1}>
              <ApiDemo
                endpoint="/api/v1/auth/token"
                method="POST"
                params={{
                  userId: "user123",
                  scope: ["accounts:read", "transactions:read"]
                }}
                description="Generate an authentication token with specified permissions scopes."
              />
            </AnimatedFadeIn>

            {/* Accounts API Example */}
            <AnimatedFadeIn delay={0.2}>
              <ApiDemo
                endpoint="/api/v1/accounts"
                method="GET"
                params={{
                  userId: "user123",
                  limit: 10,
                  offset: 0
                }}
                description="Retrieve a list of accounts associated with a specific user."
              />
            </AnimatedFadeIn>

            {/* Transactions API Example */}
            <AnimatedFadeIn delay={0.3}>
              <ApiDemo
                endpoint="/api/v1/transactions"
                method="GET"
                params={{
                  accountId: "acc_12345",
                  dateFrom: "2023-01-01",
                  dateTo: "2023-12-31",
                  limit: 25,
                  offset: 0
                }}
                description="Fetch transactions for a specific account within a date range."
              />
            </AnimatedFadeIn>

            {/* Payments API Example */}
            <AnimatedFadeIn delay={0.4}>
              <ApiDemo
                endpoint="/api/v1/payments"
                method="POST"
                params={{
                  sourceAccountId: "acc_12345",
                  destinationAccountId: "acc_67890",
                  amount: {
                    value: 100.50,
                    currency: "USD"
                  },
                  description: "Payment for services"
                }}
                description="Create a new payment between two accounts with specified amount and description."
              />
            </AnimatedFadeIn>
          </div>
        </div>
      </section>

      {/* Documentation CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="bg-primary text-white p-10 md:p-16 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <Code className="h-64 w-64" />
              </div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to start building?
                </h2>
                <p className="text-lg">
                  Sign up for a developer account to access our full API documentation, SDKs, and testing tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-primary hover:bg-white/90 px-6 py-2" size="lg">
                    Get API Keys
                  </Button>
                  <Button className="bg-transparent border-white hover:bg-white/10 px-6 py-2" size="lg" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Browse Documentation
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
