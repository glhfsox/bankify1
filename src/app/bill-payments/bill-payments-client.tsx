"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Zap, Calendar, Plus, Clock, Check } from "lucide-react";

export function BillPaymentsClient() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <>
      {/* Page Header */}
      <div className="bg-slate-50 border-b">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Bill Payments</h1>
              <p className="text-muted-foreground">
                Pay your bills on time and set up recurring payments.
              </p>
            </div>
            <Button className="custom-button">
              <Plus className="h-4 w-4 mr-2" />
              Add New Bill
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="upcoming">Upcoming Bills</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
            <TabsTrigger value="recurring">Recurring Payments</TabsTrigger>
            <TabsTrigger value="payees">Manage Payees</TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <TabsContent value="upcoming">
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Bills</CardTitle>
                    <CardDescription>Bills due in the next 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 border rounded-md">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <Zap className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Electric Utility Company</h3>
                            <p className="text-sm text-muted-foreground">Due in 3 days</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$85.72</p>
                          <Button size="sm" className="mt-2">Pay Now</Button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-4 border rounded-md">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Internet Provider</h3>
                            <p className="text-sm text-muted-foreground">Due in 7 days</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$75.99</p>
                          <Button size="sm" className="mt-2">Pay Now</Button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-4 border rounded-md">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                            <Clock className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Cell Phone</h3>
                            <p className="text-sm text-muted-foreground">Due in 12 days</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$95.00</p>
                          <Button size="sm" className="mt-2">Pay Now</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View All Bills</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recently Paid</CardTitle>
                    <CardDescription>Bills paid in the last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 border rounded-md">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                            <Check className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Water Utility</h3>
                            <p className="text-sm text-muted-foreground">Paid on Mar 10, 2025</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$45.99</p>
                          <p className="text-xs text-green-600">Paid</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-4 border rounded-md">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                            <Check className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Mortgage Payment</h3>
                            <p className="text-sm text-muted-foreground">Paid on Mar 5, 2025</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$1,200.00</p>
                          <p className="text-xs text-green-600">Paid</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-4 border rounded-md">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                            <Check className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Home Insurance</h3>
                            <p className="text-sm text-muted-foreground">Paid on Mar 1, 2025</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$135.67</p>
                          <p className="text-xs text-green-600">Paid</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Payment History</Button>
                  </CardFooter>
                </Card>
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* Other Tabs */}
          <TabsContent value="history">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-muted-foreground">
                Payment history will be implemented in the next version
              </h3>
            </div>
          </TabsContent>

          <TabsContent value="recurring">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-muted-foreground">
                Recurring payments will be implemented in the next version
              </h3>
            </div>
          </TabsContent>

          <TabsContent value="payees">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-muted-foreground">
                Payee management will be implemented in the next version
              </h3>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
