"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedSection, AnimatedFadeIn, AnimatedStaggered } from "@/components/ui/animated-section";
import { Check, CheckCircle, HelpCircle } from "lucide-react";

// Define pricing plan tiers
const individualPlans = [
  {
    name: "Basic",
    description: "Essential banking features for everyday needs",
    price: { monthly: 0, annually: 0 },
    features: [
      "No minimum balance",
      "Free debit card",
      "Mobile check deposits",
      "24/7 customer support",
      "2 free ATM withdrawals per month"
    ],
    limitedFeatures: [
      "No overdraft protection",
      "Basic financial insights",
      "Limited transaction history"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Premium",
    description: "Enhanced features for active banking users",
    price: { monthly: 12.99, annually: 129.99 },
    features: [
      "No minimum balance",
      "Free premium debit card",
      "Mobile check deposits",
      "24/7 priority customer support",
      "Unlimited ATM withdrawals",
      "Overdraft protection",
      "Advanced financial insights",
      "Unlimited transaction history",
      "Automated savings tools"
    ],
    limitedFeatures: [
      "Limited international transfers",
      "Basic investment options"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Elite",
    description: "Premium banking experience with exclusive perks",
    price: { monthly: 24.99, annually: 249.99 },
    features: [
      "No minimum balance",
      "Metal debit card",
      "Mobile check deposits",
      "24/7 dedicated support line",
      "Unlimited ATM withdrawals worldwide",
      "Advanced overdraft protection",
      "Comprehensive financial insights",
      "Unlimited transaction history",
      "Advanced automated savings",
      "Unlimited international transfers",
      "Premium investment options",
      "Travel insurance",
      "Exclusive rewards and discounts"
    ],
    limitedFeatures: [],
    cta: "Choose Elite",
    popular: false
  }
];

const businessPlans = [
  {
    name: "Startup",
    description: "Essential tools for new businesses",
    price: { monthly: 29.99, annually: 299.99 },
    features: [
      "No minimum balance",
      "5 employee debit cards",
      "Basic expense management",
      "Business mobile banking",
      "Basic accounting integrations",
      "Email support"
    ],
    limitedFeatures: [
      "Limited payment processing",
      "Basic reporting tools",
      "No merchant services"
    ],
    cta: "Start Your Business",
    popular: false
  },
  {
    name: "Business",
    description: "Comprehensive solution for growing companies",
    price: { monthly: 79.99, annually: 799.99 },
    features: [
      "No minimum balance",
      "20 employee debit cards",
      "Advanced expense management",
      "Business mobile banking",
      "Advanced accounting integrations",
      "Priority support",
      "Enhanced payment processing",
      "Advanced reporting tools",
      "Basic merchant services",
      "Payroll processing",
      "Multi-user access"
    ],
    limitedFeatures: [
      "Limited API access",
      "Basic fraud protection"
    ],
    cta: "Power Your Business",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Tailored financial solutions for large organizations",
    price: { monthly: "Custom", annually: "Custom" },
    features: [
      "Customized minimum balance",
      "Unlimited employee debit cards",
      "Enterprise expense management",
      "Business mobile banking",
      "Enterprise accounting integrations",
      "Dedicated account manager",
      "Unlimited payment processing",
      "Custom reporting tools",
      "Advanced merchant services",
      "Advanced payroll processing",
      "Unlimited multi-user access",
      "Full API access",
      "Advanced fraud protection",
      "International banking",
      "Custom solutions"
    ],
    limitedFeatures: [],
    cta: "Contact Sales",
    popular: false
  }
];

export function PricingClient() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");
  const [customerType, setCustomerType] = useState<"individual" | "business">("individual");

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm text-muted-foreground mb-2 block">Pricing</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-4">
                Simple, transparent pricing
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose the plan that's right for you or your business with no hidden fees.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            {/* Customer Type Toggle */}
            <div className="flex justify-center mb-12">
              <Tabs defaultValue="individual" value={customerType} onValueChange={(value) => setCustomerType(value as "individual" | "business")}>
                <TabsList className="grid w-[400px] grid-cols-2">
                  <TabsTrigger value="individual">Individual</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="flex justify-center items-center gap-4 mb-16">
              <span className={billingCycle === "monthly" ? "font-medium" : "text-muted-foreground"}>Monthly</span>
              <Switch
                checked={billingCycle === "annually"}
                onCheckedChange={(checked) => setBillingCycle(checked ? "annually" : "monthly")}
              />
              <span className={billingCycle === "annually" ? "font-medium" : "text-muted-foreground"}>
                Annually <span className="text-sm text-green-500 font-medium">(Save 20%)</span>
              </span>
            </div>

            {/* Pricing Cards */}
            <AnimatedStaggered
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              staggerDelay={0.1}
            >
              {(customerType === "individual" ? individualPlans : businessPlans).map((plan, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden ${plan.popular ? 'border-primary border-2 shadow-lg' : 'border'}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-primary text-white text-xs py-1 px-3 rounded-bl">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      {typeof plan.price[billingCycle] === "number" ? (
                        <>
                          <span className="text-4xl font-bold">${plan.price[billingCycle]}</span>
                          <span className="text-muted-foreground">/{billingCycle === "monthly" ? "month" : "year"}</span>
                        </>
                      ) : (
                        <span className="text-4xl font-bold">{plan.price[billingCycle]}</span>
                      )}
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-medium">What's included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {plan.limitedFeatures.length > 0 && (
                        <>
                          <h4 className="text-sm font-medium text-muted-foreground">Limitations:</h4>
                          <ul className="space-y-2">
                            {plan.limitedFeatures.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <HelpCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={plan.popular ? "custom-button w-full" : "w-full"}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </AnimatedStaggered>

            <div className="text-center mt-12 text-muted-foreground">
              <p>All plans include our standard security features and mobile banking app access.</p>
              <p className="mt-2">Need help choosing? <Button variant="link" className="p-0 h-auto text-primary">Contact our team</Button></p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Compare Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Detailed comparison of all features across our {customerType === "individual" ? "individual" : "business"} plans.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 w-1/4">Feature</th>
                    {(customerType === "individual" ? individualPlans : businessPlans).map((plan, index) => (
                      <th key={index} className="text-center py-4 px-6">
                        <span className={plan.popular ? "text-primary font-bold" : ""}>{plan.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {customerType === "individual" ? (
                    <>
                      <tr className="border-b">
                        <td className="py-3 px-6 font-medium">Monthly Fee</td>
                        <td className="text-center py-3 px-6">${individualPlans[0].price.monthly}/mo</td>
                        <td className="text-center py-3 px-6">${individualPlans[1].price.monthly}/mo</td>
                        <td className="text-center py-3 px-6">${individualPlans[2].price.monthly}/mo</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-6 font-medium">Minimum Balance</td>
                        <td className="text-center py-3 px-6">$0</td>
                        <td className="text-center py-3 px-6">$0</td>
                        <td className="text-center py-3 px-6">$0</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-6 font-medium">ATM Fee Reimbursements</td>
                        <td className="text-center py-3 px-6">2 per month</td>
                        <td className="text-center py-3 px-6">Unlimited domestic</td>
                        <td className="text-center py-3 px-6">Unlimited worldwide</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-6 font-medium">Overdraft Protection</td>
                        <td className="text-center py-3 px-6">
                          <span className="text-rose-500">—</span>
                        </td>
                        <td className="text-center py-3 px-6">
                          <Check className="inline-block h-5 w-5 text-green-500" />
                        </td>
                        <td className="text-center py-3 px-6">
                          <Check className="inline-block h-5 w-5 text-green-500" />
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-6 font-medium">International Transfers</td>
                        <td className="text-center py-3 px-6">
                          <span className="text-rose-500">—</span>
                        </td>
                        <td className="text-center py-3 px-6">Limited</td>
                        <td className="text-center py-3 px-6">Unlimited</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-6 font-medium">Customer Support</td>
                        <td className="text-center py-3 px-6">Standard</td>
                        <td className="text-center py-3 px-6">Priority</td>
                        <td className="text-center py-3 px-6">Dedicated</td>
                      </tr>
                    </>
                  ) : (
                    <>
                      <tr className="border-b">
                        <td className="py-3 px-6 font-medium">Monthly Fee</td>
                        <td className="text-center py-3 px-6">${businessPlans[0].price.monthly}/mo</td>
                        <td className="text-center py-3 px-6">${businessPlans[1].price.monthly}/mo</td>
                        <td className="text-center py-3 px-6">Custom</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-6 font-medium">Employee Cards</td>
                        <td className="text-center py-3 px-6">5</td>
                        <td className="text-center py-3 px-6">20</td>
                        <td className="text-center py-3 px-6">Unlimited</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-6 font-medium">Expense Management</td>
                        <td className="text-center py-3 px-6">Basic</td>
                        <td className="text-center py-3 px-6">Advanced</td>
                        <td className="text-center py-3 px-6">Enterprise</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-6 font-medium">Merchant Services</td>
                        <td className="text-center py-3 px-6">
                          <span className="text-rose-500">—</span>
                        </td>
                        <td className="text-center py-3 px-6">Basic</td>
                        <td className="text-center py-3 px-6">Advanced</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-6 font-medium">API Access</td>
                        <td className="text-center py-3 px-6">
                          <span className="text-rose-500">—</span>
                        </td>
                        <td className="text-center py-3 px-6">Limited</td>
                        <td className="text-center py-3 px-6">Full Access</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-6 font-medium">Support</td>
                        <td className="text-center py-3 px-6">Email</td>
                        <td className="text-center py-3 px-6">Priority</td>
                        <td className="text-center py-3 px-6">Dedicated Manager</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Got questions about our pricing? Find answers to common questions below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-3">Can I change plans later?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Are there any hidden fees?</h3>
                <p className="text-muted-foreground">
                  No, we believe in complete transparency. The price you see is what you'll pay, with no hidden charges.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Do you offer a free trial?</h3>
                <p className="text-muted-foreground">
                  Yes, all our premium plans come with a 30-day free trial so you can experience the benefits before committing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, debit cards, bank transfers, and digital payment methods.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Can I cancel anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access until the end of your current billing period.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Do you offer custom plans?</h3>
                <p className="text-muted-foreground">
                  Yes, for businesses with specific needs, we offer custom plans. Please contact our sales team to discuss your requirements.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="mb-4">Still have questions?</p>
              <Button className="custom-button px-6 py-2">
                Contact Support
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
