"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CreditCard,
  DollarSign,
  BarChart3,
  Receipt,
  Bell,
  ArrowUpRight,
  Search,
  Plus,
  ExternalLink,
  MoreHorizontal,
  ChevronDown,
  Calendar,
  Filter,
  Download,
  AlertCircle,
  CheckCircle,
  Landmark,
  Users,
  Clock,
  PiggyBank,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "@/components/ui/animated-section";

// Mock data for accounts
const accounts = [
  {
    id: "acc_1",
    name: "Premium Checking",
    type: "Checking",
    balance: 5248.75,
    currency: "USD",
    accountNumber: "**** 4582",
    available: 5248.75,
    icon: <Landmark className="h-5 w-5 text-blue-600" />,
    color: "bg-blue-50 border-blue-200"
  },
  {
    id: "acc_2",
    name: "High-Yield Savings",
    type: "Savings",
    balance: 14750.52,
    currency: "USD",
    accountNumber: "**** 7891",
    available: 14750.52,
    icon: <PiggyBank className="h-5 w-5 text-green-600" />,
    color: "bg-green-50 border-green-200"
  },
  {
    id: "acc_3",
    name: "Platinum Credit Card",
    type: "Credit",
    balance: -1250.33,
    currency: "USD",
    accountNumber: "**** 3456",
    creditLimit: 10000,
    available: 8749.67,
    dueDate: "Apr 15, 2025",
    icon: <CreditCard className="h-5 w-5 text-purple-600" />,
    color: "bg-purple-50 border-purple-200"
  },
  {
    id: "acc_4",
    name: "Investment Portfolio",
    type: "Investment",
    balance: 32650.18,
    currency: "USD",
    accountNumber: "**** 9012",
    available: 32650.18,
    earnings: "+5.8%",
    icon: <BarChart3 className="h-5 w-5 text-amber-600" />,
    color: "bg-amber-50 border-amber-200"
  }
];

// Mock data for recent transactions
const recentTransactions = [
  {
    id: "txn_1",
    description: "Starbucks Coffee",
    category: "Food & Dining",
    date: "Today, 9:15 AM",
    amount: -5.75,
    currency: "USD",
    status: "completed",
    iconBg: "bg-orange-100",
    icon: "https://ext.same-assets.com/3139368577/2694267301.png"
  },
  {
    id: "txn_2",
    description: "Amazon.com",
    category: "Shopping",
    date: "Yesterday, 5:32 PM",
    amount: -49.99,
    currency: "USD",
    status: "completed",
    iconBg: "bg-blue-100",
    icon: "https://ext.same-assets.com/1069293329/3399452619.png"
  },
  {
    id: "txn_3",
    description: "Salary Deposit",
    category: "Income",
    date: "Mar 15, 2025",
    amount: 3500.00,
    currency: "USD",
    status: "completed",
    iconBg: "bg-green-100",
    icon: "https://ext.same-assets.com/4186824824/3756064371.png"
  },
  {
    id: "txn_4",
    description: "Netflix Subscription",
    category: "Entertainment",
    date: "Mar 14, 2025",
    amount: -14.99,
    currency: "USD",
    status: "completed",
    iconBg: "bg-red-100",
    icon: "https://ext.same-assets.com/4212367428/2622217782.png"
  },
  {
    id: "txn_5",
    description: "Target",
    category: "Shopping",
    date: "Mar 12, 2025",
    amount: -87.65,
    currency: "USD",
    status: "completed",
    iconBg: "bg-red-100",
    icon: "https://ext.same-assets.com/3686747347/2397452195.png"
  }
];

// Mock data for alerts
const alerts = [
  {
    id: "alert_1",
    type: "warning",
    title: "Unusual activity detected",
    message: "We noticed a login attempt from a new device in San Francisco, CA. Was this you?",
    date: "10 minutes ago",
    icon: <AlertCircle className="h-5 w-5 text-amber-600" />,
    iconBg: "bg-amber-100",
    action: "Review activity"
  },
  {
    id: "alert_2",
    type: "info",
    title: "Upcoming bill payment",
    message: "Your electricity bill payment of $85.72 is scheduled for tomorrow.",
    date: "2 hours ago",
    icon: <Receipt className="h-5 w-5 text-blue-600" />,
    iconBg: "bg-blue-100",
    action: "View details"
  },
  {
    id: "alert_3",
    type: "success",
    title: "Fund transfer complete",
    message: "$1,200 has been successfully transferred to John Smith.",
    date: "Yesterday",
    icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    iconBg: "bg-green-100",
    action: "See transfer"
  }
];

export function DashboardClient() {
  const [activeTab, setActiveTab] = useState("overview");

  // Calculate total balance
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

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
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, John Doe. Here's an overview of your finances.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9 w-full md:w-[220px]" placeholder="Search transactions..." />
              </div>
              <Button className="custom-button shrink-0">
                <Plus className="h-4 w-4 mr-2" />
                New Transfer
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="container py-8">
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="bills">Bills & Payments</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Financial Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <AnimatedFadeIn delay={0.1}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Total Balance</CardDescription>
                    <CardTitle className="text-3xl">
                      {formatCurrency(totalBalance)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm">
                      <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">4.3%</span>
                      <span className="text-muted-foreground ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedFadeIn>

              <AnimatedFadeIn delay={0.2}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Income (Mar)</CardDescription>
                    <CardTitle className="text-3xl">
                      {formatCurrency(5783.25)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm">
                      <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">2.5%</span>
                      <span className="text-muted-foreground ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedFadeIn>

              <AnimatedFadeIn delay={0.3}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Spending (Mar)</CardDescription>
                    <CardTitle className="text-3xl">
                      {formatCurrency(2456.78)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm">
                      <ArrowUpRight className="h-4 w-4 text-red-500 mr-1 rotate-90" />
                      <span className="text-red-500 font-medium">1.8%</span>
                      <span className="text-muted-foreground ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedFadeIn>

              <AnimatedFadeIn delay={0.4}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Savings Goal Progress</CardDescription>
                    <CardTitle className="text-3xl">
                      68%
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "68%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      $6,800 saved of $10,000 goal
                    </p>
                  </CardContent>
                </Card>
              </AnimatedFadeIn>
            </div>

            {/* Account Balances Section */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Account Balances</h2>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Account
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {accounts.map((account, index) => (
                  <AnimatedFadeIn key={account.id} delay={0.1 * (index + 1)}>
                    <Card className={`${account.color}`}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-white rounded-md">
                              {account.icon}
                            </div>
                            <div>
                              <CardTitle className="text-base">{account.name}</CardTitle>
                              <CardDescription>{account.accountNumber}</CardDescription>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Current Balance</span>
                            <span className={`font-medium ${account.balance < 0 ? 'text-red-600' : ''}`}>
                              {formatCurrency(account.balance)}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Available</span>
                            <span className="font-medium">
                              {formatCurrency(account.available)}
                            </span>
                          </div>
                          {account.type === "Credit" && (
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Due Date</span>
                              <span className="font-medium">{account.dueDate}</span>
                            </div>
                          )}
                          {account.type === "Investment" && (
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">YTD Return</span>
                              <span className="font-medium text-green-600">{account.earnings}</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" size="sm">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  </AnimatedFadeIn>
                ))}
              </div>
            </section>

            {/* Alerts and Notifications */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                  Alerts & Notifications
                  <Badge variant="outline" className="ml-2 text-xs">
                    {alerts.length} new
                  </Badge>
                </h2>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <AnimatedFadeIn key={alert.id} delay={0.1 * (index + 1)}>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className={`h-10 w-10 rounded-full ${alert.iconBg} flex items-center justify-center shrink-0`}>
                            {alert.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{alert.title}</h3>
                              <span className="text-sm text-muted-foreground">{alert.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
                            <Button
                              variant="link"
                              className="p-0 h-auto text-primary text-sm mt-2"
                            >
                              {alert.action}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedFadeIn>
                ))}
              </div>
            </section>

            {/* Recent Transactions */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Transactions</h2>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {recentTransactions.map((transaction, index) => (
                      <div key={transaction.id} className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className={`h-10 w-10 rounded-full ${transaction.iconBg} flex items-center justify-center overflow-hidden`}>
                            <Image
                              src={transaction.icon}
                              alt={transaction.description}
                              width={24}
                              height={24}
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{transaction.description}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>{transaction.category}</span>
                              <span className="mx-2">•</span>
                              <span>{transaction.date}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`font-medium ${transaction.amount < 0 ? '' : 'text-green-600'}`}>
                          {transaction.amount < 0 ? '' : '+'}
                          {formatCurrency(transaction.amount)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Placeholder for the other tabs */}
          <TabsContent value="transactions">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-muted-foreground">
                Transaction history will be implemented in the next version
              </h3>
            </div>
          </TabsContent>

          <TabsContent value="bills">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-muted-foreground">
                Bills & Payments module will be implemented in the next version
              </h3>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-muted-foreground">
                Analytics will be implemented in the next version
              </h3>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-muted-foreground">
                Settings will be implemented in the next version
              </h3>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
