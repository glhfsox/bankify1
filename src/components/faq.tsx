"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection, AnimatedStaggered } from "@/components/ui/animated-section";

export function FAQ() {
  const faqs = [
    {
      question: "What features does Bankify offer?",
      answer: "Bankify offers a comprehensive suite of features including transaction monitoring, spending analysis, account balance tracking, bill payment reminders, secure transfers, and personalized alerts. These features are designed to make financial management easier and more efficient."
    },
    {
      question: "Is Bankify secure to use for my financial information?",
      answer: "Yes, Bankify uses state-of-the-art security measures to protect your financial information. All data is encrypted, and we implement multiple layers of security protocols to ensure your information remains safe and confidential."
    },
    {
      question: "Can I link multiple bank accounts to Bankify?",
      answer: "Absolutely! Bankify allows you to link and manage multiple bank accounts in one place, giving you a complete overview of your finances across different institutions."
    },
    {
      question: "Does Bankify support mobile transactions?",
      answer: "Yes, Bankify fully supports mobile transactions. You can perform all banking operations on your mobile device through our responsive web interface or dedicated mobile application."
    },
    {
      question: "How do I set up my Bankify account?",
      answer: "Setting up your Bankify account is simple. Just click on 'Get Started', create your user profile with basic information, link your bank accounts securely, and you're ready to start managing your finances more effectively."
    },
    {
      question: "Can I track my spending over time?",
      answer: "Yes, Bankify provides detailed spending analytics and visualization tools that allow you to track your spending patterns over time. You can view your expenses by category, time period, and even set up custom reports."
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase mb-2 block">Faq's</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Got questions? We have answers
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedStaggered staggerDelay={0.1}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg p-2">
                  <AccordionTrigger className="text-left font-medium px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedStaggered>
        </div>
      </div>
    </section>
  );
}
