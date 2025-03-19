"use client";

import { Card, CardContent } from "@/components/ui/card";

export function VisionGoals() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase mb-2 block">Vision & Goals</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shaping the future of personal finance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-xl font-semibold">Financial Independence</h3>
              <p className="text-muted-foreground">
                Our vision is to help individuals achieve financial freedom by providing tools that simplify money management, track spending, and create meaningful savings strategies.
              </p>
            </CardContent>
          </Card>

          <Card className="border shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-xl font-semibold">Financial Clarity</h3>
              <p className="text-muted-foreground">
                Bankify aims to bring clarity to personal finances by offering intuitive solutions that enable users to better understand and control their financial situation.
              </p>
            </CardContent>
          </Card>

          <Card className="border shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-xl font-semibold">Enable Smarter Choices</h3>
              <p className="text-muted-foreground">
                Our goal is to make financial management accessible and efficient for everyone, helping users set and reach their financial goals with ease and confidence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
