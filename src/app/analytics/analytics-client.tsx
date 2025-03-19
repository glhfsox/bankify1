"use client";

import { useState } from "react";
import {
  BarChart,
  PieChart,
  Wallet,
  CreditCard,
  Filter,
  Download,
  Calendar,
  Search,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Coffee,
  ShoppingBag,
  Home,
  Car,
  Utensils,
  Tv,
  Plane,
  HeartPulse,
  Landmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "@/components/ui/animated-section";

// Mock data for spending by category (for the pie chart)
const spendingByCategory = [
  { category: "Housing", amount: 1200, percentage: 28, color: "bg-blue-500", icon: <Home className="h-4 w-4" /> },
  { category: "Food & Dining", amount: 850, percentage: 20, color: "bg-green-500", icon: <Utensils className="h-4 w-4" /> },
  { category: "Transportation", amount: 450, percentage: 10, color: "bg-amber-500", icon: <Car className="h-4 w-4" /> },
  { category: "Shopping", amount: 650, percentage: 15, color: "bg-purple-500", icon: <ShoppingBag className="h-4 w-4" /> },
  { category: "Entertainment", amount: 350, percentage: 8, color: "bg-red-500", icon: <Tv className="h-4 w-4" /> },
  { category: "Travel", amount: 300, percentage: 7, color: "bg-indigo-500", icon: <Plane className="h-4 w-4" /> },
  { category: "Health", amount: 250, percentage: 6, color: "bg-pink-500", icon: <HeartPulse className="h-4 w-4" /> },
  { category: "Other", amount: 250, percentage: 6, color: "bg-gray-500", icon: <DollarSign className="h-4 w-4" /> }
];

// Mock data for monthly spending (for the bar chart)
const monthlySpending = [
  { month: "Jan", amount: 2250 },
  { month: "Feb", amount: 2100 },
  { month: "Mar", amount: 2450 },
  { month: "Apr", amount: 1980 },
  { month: "May", amount: 2650 },
  { month: "Jun", amount: 2400 }
];

// Mock data for recent transactions
const recentTransactions = [
  {
    id: "txn_1",
    merchant: "Amazon.com",
    category: "Shopping",
    date: "Mar 17, 2025",
    amount: -79.99,
    status: "completed"
  },
  {
    id: "txn_2",
    merchant: "Starbucks",
    category: "Food & Dining",
    date: "Mar 16, 2025",
    amount: -5.75,
    status: "completed"
  },
  {
    id: "txn_3",
    merchant: "Netflix",
    category: "Entertainment",
    date: "Mar 15, 2025",
    amount: -14.99,
    status: "completed"
  },
  {
    id: "txn_4",
    merchant: "Uber",
    category: "Transportation",
    date: "Mar 15, 2025",
    amount: -24.50,
    status: "completed"
  },
  {
    id: "txn_5",
    merchant: "Whole Foods",
    category: "Groceries",
    date: "Mar 14, 2025",
    amount: -87.32,
    status: "completed"
  },
  {
    id: "txn_6",
    merchant: "AT&T",
    category: "Bills & Utilities",
    date: "Mar 13, 2025",
    amount: -95.00,
    status: "completed"
  },
  {
    id: "txn_7",
    merchant: "Shell Gas",
    category: "Transportation",
    date: "Mar 12, 2025",
    amount: -45.67,
    status: "completed"
  },
  {
    id: "txn_8",
    merchant: "Apple",
    category: "Shopping",
    date: "Mar 10, 2025",
    amount: -999.00,
    status: "completed"
  }
];

// Mock data for spending trends
const spendingTrends = [
  {
    id: "trend_1",
    title: "Food & Dining",
    change: 15.3,
    increasing: true,
    amount: 850,
    prevAmount: 737.21,
    icon: <Utensils className="h-4 w-4" />,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    id: "trend_2",
    title: "Shopping",
    change: 32.7,
    increasing: true,
    amount: 650,
    prevAmount: 489.83,
    icon: <ShoppingBag className="h-4 w-4" />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    id: "trend_3",
    title: "Transportation",
    change: 8.2,
    increasing: false,
    amount: 450,
    prevAmount: 490.20,
    icon: <Car className="h-4 w-4" />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    id: "trend_4",
    title: "Entertainment",
    change: 5.1,
    increasing: true,
    amount: 350,
    prevAmount: 332.97,
    icon: <Tv className="h-4 w-4" />,
    iconBg: "bg-red-100",
    iconColor: "text-red-600"
  }
];

export function AnalyticsClient() {
  const [activeTab, setActiveTab] = useState("spending");
  const [selectedMonth, setSelectedMonth] = useState("March 2025");

  // Format currency
  const formatCurrency = (amount: number, currency: string = "USD") => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-slate-50 border-b">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Financial Analytics</h1>
              <p className="text-muted-foreground">
                Track your spending, monitor transactions, and analyze your financial behavior.
              </p>
            </div>
            <div className="flex gap-3">
              <Select defaultValue={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="January 2025">January 2025</SelectItem>
                  <SelectItem value="February 2025">February 2025</SelectItem>
                  <SelectItem value="March 2025">March 2025</SelectItem>
                  <SelectItem value="April 2025">April 2025</SelectItem>
                  <SelectItem value="May 2025">May 2025</SelectItem>
                  <SelectItem value="June 2025">June 2025</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <Tabs defaultValue="spending" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="spending">Spending Analysis</TabsTrigger>
            <TabsTrigger value="transactions">Transaction Monitoring</TabsTrigger>
            <TabsTrigger value="insights">Insights & Trends</TabsTrigger>
            <TabsTrigger value="budgets">Budgets</TabsTrigger>
          </TabsList>

          {/* Spending Analysis Tab */}
          <TabsContent value="spending" className="space-y-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AnimatedFadeIn delay={0.1}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Total Spending in {selectedMonth}</CardDescription>
                    <CardTitle className="text-3xl">
                      {formatCurrency(4250.00)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-red-500 font-medium">8.2%</span>
                      <span className="text-muted-foreground ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedFadeIn>

              <AnimatedFadeIn delay={0.2}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Biggest Category</CardDescription>
                    <CardTitle>
                      Housing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm">
                        <Home className="h-4 w-4 text-blue-500 mr-1" />
                        <span className="text-muted-foreground">28% of spending</span>
                      </div>
                      <span className="font-medium">{formatCurrency(1200.00)}</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedFadeIn>

              <AnimatedFadeIn delay={0.3}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Monthly Average</CardDescription>
                    <CardTitle className="text-3xl">
                      {formatCurrency(3971.67)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm">
                      <span className="text-muted-foreground">Based on last 6 months</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedFadeIn>
            </div>

            {/* Spending by Category */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <AnimatedFadeIn className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Spending by Category</CardTitle>
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center py-8">
                      <div className="relative h-[250px] w-[250px] flex items-center justify-center">
                        {/* PieChart representation (simplified) */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-[200px] w-[200px] rounded-full border-8 border-slate-100"></div>
                          {spendingByCategory.map((category, index) => (
                            <div
                              key={category.category}
                              className={`absolute h-[200px] w-[200px] rounded-full border-8 ${category.color}`}
                              style={{
                                clipPath: `polygon(50% 50%, 50% 0%, ${100 - 100 * Math.cos(index * 0.78)}% ${50 - 50 * Math.sin(index * 0.78)}%)`,
                                transform: `rotate(${index * 45}deg)`
                              }}
                            ></div>
                          ))}
                          <div className="z-10 text-center">
                            <div className="text-3xl font-bold">{formatCurrency(4250.00)}</div>
                            <div className="text-sm text-muted-foreground">Total Spending</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {spendingByCategory.map(category => (
                        <div key={category.category} className="flex items-center gap-2">
                          <div className={`h-3 w-3 rounded-full ${category.color}`}></div>
                          <span className="text-sm flex-1">{category.category}</span>
                          <span className="text-sm font-medium">{category.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedFadeIn>

              <div className="space-y-8">
                <AnimatedFadeIn>
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Merchants</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2">
                      <ul className="space-y-4">
                        <li className="px-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                                <Landmark className="h-4 w-4 text-amber-600" />
                              </div>
                              <span>Mortgage</span>
                            </div>
                            <span className="font-medium">{formatCurrency(1000.00)}</span>
                          </div>
                        </li>
                        <li className="px-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                <ShoppingBag className="h-4 w-4 text-green-600" />
                              </div>
                              <span>Whole Foods</span>
                            </div>
                            <span className="font-medium">{formatCurrency(450.00)}</span>
                          </div>
                        </li>
                        <li className="px-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <ShoppingBag className="h-4 w-4 text-blue-600" />
                              </div>
                              <span>Amazon</span>
                            </div>
                            <span className="font-medium">{formatCurrency(325.00)}</span>
                          </div>
                        </li>
                        <li className="px-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                                <Car className="h-4 w-4 text-red-600" />
                              </div>
                              <span>Shell Gas</span>
                            </div>
                            <span className="font-medium">{formatCurrency(210.00)}</span>
                          </div>
                        </li>
                        <li className="px-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                                <Coffee className="h-4 w-4 text-purple-600" />
                              </div>
                              <span>Starbucks</span>
                            </div>
                            <span className="font-medium">{formatCurrency(105.00)}</span>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedFadeIn>

                <AnimatedFadeIn>
                  <Card>
                    <CardHeader>
                      <CardTitle>Spending History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[180px] w-full flex items-end justify-between gap-2 mt-4">
                        {monthlySpending.map((month) => (
                          <div key={month.month} className="flex flex-col items-center gap-2">
                            <div
                              className="w-10 bg-primary/80 rounded-t-sm"
                              style={{
                                height: `${(month.amount / 2650) * 120}px`,
                                opacity: month.month === "Mar" ? 1 : 0.7
                              }}
                            ></div>
                            <span className="text-xs">{month.month}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedFadeIn>
              </div>
            </div>
          </TabsContent>

          {/* Transaction Monitoring Tab */}
          <TabsContent value="transactions" className="space-y-8">
            {/* Transaction Filters */}
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex flex-1 gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search transactions..." className="pl-9 w-full" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="shopping">Shopping</SelectItem>
                    <SelectItem value="food">Food & Dining</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="transportation">Transportation</SelectItem>
                    <SelectItem value="bills">Bills & Utilities</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Accounts</SelectItem>
                    <SelectItem value="checking">Checking</SelectItem>
                    <SelectItem value="savings">Savings</SelectItem>
                    <SelectItem value="credit">Credit Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Date Range
              </Button>
            </div>

            {/* Transactions Table */}
            <AnimatedFadeIn>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Recent Transactions</CardTitle>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">Merchant</th>
                          <th className="text-left py-3 px-4 font-medium">Category</th>
                          <th className="text-left py-3 px-4 font-medium">Date</th>
                          <th className="text-right py-3 px-4 font-medium">Amount</th>
                          <th className="text-right py-3 px-4 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {recentTransactions.map((transaction) => (
                          <tr key={transaction.id} className="hover:bg-slate-50">
                            <td className="py-3 px-4">{transaction.merchant}</td>
                            <td className="py-3 px-4">
                              <Badge variant="outline" className="font-normal">
                                {transaction.category}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">{transaction.date}</td>
                            <td className="py-3 px-4 text-right font-medium">
                              {formatCurrency(transaction.amount)}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                                {transaction.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-muted-foreground">Showing 8 of 124 transactions</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedFadeIn>

            {/* Transaction Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AnimatedFadeIn delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle>Recurring Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                            <Tv className="h-4 w-4 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium">Netflix</p>
                            <p className="text-xs text-muted-foreground">Monthly</p>
                          </div>
                        </div>
                        <span className="font-medium">{formatCurrency(14.99)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <Home className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Rent</p>
                            <p className="text-xs text-muted-foreground">Monthly</p>
                          </div>
                        </div>
                        <span className="font-medium">{formatCurrency(1800.00)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                            <DollarSign className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Gym Membership</p>
                            <p className="text-xs text-muted-foreground">Monthly</p>
                          </div>
                        </div>
                        <span className="font-medium">{formatCurrency(39.99)}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full" size="sm">
                      View All Subscriptions
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedFadeIn>

              <AnimatedFadeIn delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle>Spending Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {spendingTrends.map((trend) => (
                        <div key={trend.id} className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className={`h-8 w-8 rounded-full ${trend.iconBg} flex items-center justify-center`}>
                              <div className={trend.iconColor}>{trend.icon}</div>
                            </div>
                            <div>
                              <p className="font-medium">{trend.title}</p>
                              <div className="flex items-center text-xs">
                                {trend.increasing ? (
                                  <TrendingUp className="h-3 w-3 text-red-500 mr-1" />
                                ) : (
                                  <TrendingDown className="h-3 w-3 text-green-500 mr-1" />
                                )}
                                <span className={trend.increasing ? "text-red-500" : "text-green-500"}>
                                  {trend.change}% {trend.increasing ? "increase" : "decrease"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="font-medium">{formatCurrency(trend.amount)}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full" size="sm">
                      View Detailed Analysis
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedFadeIn>

              <AnimatedFadeIn delay={0.3}>
                <Card>
                  <CardHeader>
                    <CardTitle>Suspicious Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="py-8 flex flex-col items-center justify-center text-center">
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-medium text-lg mb-2">No Suspicious Activity</h3>
                      <p className="text-muted-foreground text-sm">
                        Your account is secure. We'll notify you if we detect any unusual transactions.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full" size="sm">
                      Security Settings
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedFadeIn>
            </div>
          </TabsContent>

          {/* Placeholder for the other tabs */}
          <TabsContent value="insights">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-muted-foreground">
                Insights & Trends will be implemented in the next version
              </h3>
            </div>
          </TabsContent>

          <TabsContent value="budgets">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-muted-foreground">
                Budgets will be implemented in the next version
              </h3>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
