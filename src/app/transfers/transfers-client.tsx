"use client";

import { useState } from "react";
import {
  ArrowRight,
  Shield,
  CreditCard,
  Users,
  Building,
  Globe,
  Landmark,
  Repeat,
  RefreshCw,
  Clock,
  CheckCircle2,
  Search,
  CalendarClock
} from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "@/components/ui/animated-section";
import { Checkbox } from "@/components/ui/checkbox";

// Mock data for accounts
const accounts = [
  { id: "acc_1", name: "Premium Checking", balance: 5248.75, number: "**** 4582" },
  { id: "acc_2", name: "High-Yield Savings", balance: 14750.52, number: "**** 7891" },
  { id: "acc_3", name: "Platinum Credit Card", balance: 8749.67, number: "**** 3456" }
];

// Mock data for recent recipients
const recentRecipients = [
  {
    id: "rec_1",
    name: "John Smith",
    email: "john.smith@example.com",
    accountNumber: "**** 7890",
    bank: "Chase Bank",
    lastTransfer: "Mar 12, 2025"
  },
  {
    id: "rec_2",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    accountNumber: "**** 3456",
    bank: "Bank of America",
    lastTransfer: "Feb 28, 2025"
  },
  {
    id: "rec_3",
    name: "Michael Brown",
    email: "mike.brown@example.com",
    accountNumber: "**** 1234",
    bank: "Wells Fargo",
    lastTransfer: "Feb 15, 2025"
  },
  {
    id: "rec_4",
    name: "Electric Company",
    email: "payments@electricco.com",
    accountNumber: "**** 9012",
    bank: "CitiBank",
    lastTransfer: "Mar 5, 2025"
  }
];

// Mock data for transfer history
const transferHistory = [
  {
    id: "transfer_1",
    recipient: "John Smith",
    amount: 500,
    date: "Mar 15, 2025",
    status: "Completed",
    source: "Premium Checking"
  },
  {
    id: "transfer_2",
    recipient: "Sarah Johnson",
    amount: 1200,
    date: "Mar 10, 2025",
    status: "Completed",
    source: "Premium Checking"
  },
  {
    id: "transfer_3",
    recipient: "Electric Company",
    amount: 85.72,
    date: "Mar 5, 2025",
    status: "Completed",
    source: "Premium Checking"
  },
  {
    id: "transfer_4",
    recipient: "Michael Brown",
    amount: 350,
    date: "Feb 28, 2025",
    status: "Completed",
    source: "High-Yield Savings"
  },
  {
    id: "transfer_5",
    recipient: "Water Utility",
    amount: 45.99,
    date: "Feb 22, 2025",
    status: "Completed",
    source: "Premium Checking"
  },
  {
    id: "transfer_6",
    recipient: "Internal Transfer",
    amount: 2000,
    date: "Feb 15, 2025",
    status: "Completed",
    source: "Premium Checking → High-Yield Savings"
  }
];

// Form validation schema
const transferSchema = z.object({
  sourceAccount: z.string().min(1, { message: "Please select a source account" }),
  recipientName: z.string().min(1, { message: "Recipient name is required" }),
  recipientEmail: z.string().email({ message: "Please enter a valid email" }).optional().or(z.literal("")),
  recipientAccountNumber: z.string().min(1, { message: "Account number is required" }),
  recipientRoutingNumber: z.string().min(9, { message: "Routing number must be 9 digits" }).optional().or(z.literal("")),
  recipientBank: z.string().min(1, { message: "Bank name is required" }),
  amount: z
    .string()
    .min(1, { message: "Amount is required" })
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: "Amount must be greater than 0",
    }),
  memo: z.string().optional(),
  saveRecipient: z.boolean().optional(),
  transferDate: z.enum(["now", "scheduled"]),
  scheduleDate: z.string().optional()
});

type TransferFormData = z.infer<typeof transferSchema>;

export function TransfersClient() {
  const [activeTab, setActiveTab] = useState("new-transfer");
  const [transferComplete, setTransferComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRecipient, setSelectedRecipient] = useState<string | null>(null);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Initialize form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<TransferFormData>({
    resolver: zodResolver(transferSchema),
    defaultValues: {
      sourceAccount: "",
      recipientName: "",
      recipientEmail: "",
      recipientAccountNumber: "",
      recipientRoutingNumber: "",
      recipientBank: "",
      amount: "",
      memo: "",
      saveRecipient: true,
      transferDate: "now",
      scheduleDate: ""
    },
  });

  const watchTransferDate = watch("transferDate");

  // Handle form submission
  const onSubmit = async (data: TransferFormData) => {
    setIsLoading(true);

    try {
      // In a real application, this would be an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Show the success message
      setTransferComplete(true);
      reset();
    } catch (error) {
      console.error("Transfer failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle selecting a recipient
  const handleSelectRecipient = (recipient: typeof recentRecipients[0]) => {
    setValue("recipientName", recipient.name);
    setValue("recipientEmail", recipient.email);
    setValue("recipientAccountNumber", recipient.accountNumber);
    setValue("recipientBank", recipient.bank);
    setSelectedRecipient(recipient.id);
  };

  // Start a new transfer
  const startNewTransfer = () => {
    setTransferComplete(false);
    reset();
    setSelectedRecipient(null);
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-slate-50 border-b">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Secure Transfers</h1>
              <p className="text-muted-foreground">
                Send money securely to friends, family, or businesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <Tabs defaultValue="new-transfer" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="new-transfer">New Transfer</TabsTrigger>
            <TabsTrigger value="history">Transfer History</TabsTrigger>
            <TabsTrigger value="recurring">Recurring Transfers</TabsTrigger>
            <TabsTrigger value="international">International Transfers</TabsTrigger>
          </TabsList>

          {/* New Transfer Tab */}
          <TabsContent value="new-transfer" className="space-y-8">
            {transferComplete ? (
              <AnimatedFadeIn>
                <div className="max-w-md mx-auto">
                  <Card className="border shadow-lg">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl">Transfer Successful!</CardTitle>
                      <CardDescription>
                        Your transfer has been processed successfully.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Amount</span>
                        <span className="font-medium">$500.00</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">To</span>
                        <span className="font-medium">John Smith</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">From</span>
                        <span className="font-medium">Premium Checking</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-medium">Mar 17, 2025</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Reference Number</span>
                        <span className="font-medium">TRF87654321</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex-col space-y-2">
                      <Button
                        className="w-full custom-button"
                        onClick={startNewTransfer}
                      >
                        Make Another Transfer
                      </Button>
                      <Button variant="outline" className="w-full">
                        View Transfer Details
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </AnimatedFadeIn>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Transfer Form */}
                <div className="lg:col-span-2">
                  <AnimatedFadeIn>
                    <Card>
                      <CardHeader>
                        <CardTitle>New Transfer</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form id="transfer-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                          {/* Source Account */}
                          <div className="space-y-2">
                            <Label htmlFor="sourceAccount">From Account</Label>
                            <Select
                              onValueChange={(value) => setValue("sourceAccount", value)}
                              defaultValue=""
                            >
                              <SelectTrigger
                                id="sourceAccount"
                                className={errors.sourceAccount ? "border-red-500" : ""}
                              >
                                <SelectValue placeholder="Select Account" />
                              </SelectTrigger>
                              <SelectContent>
                                {accounts.map(account => (
                                  <SelectItem key={account.id} value={account.id}>
                                    <div className="flex justify-between items-center w-full">
                                      <span>{account.name}</span>
                                      <span className="text-muted-foreground">
                                        {formatCurrency(account.balance)}
                                      </span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.sourceAccount && (
                              <p className="text-red-500 text-sm">{errors.sourceAccount.message}</p>
                            )}
                          </div>

                          {/* Recipient Information */}
                          <div className="border-t pt-6">
                            <h3 className="text-lg font-medium mb-4">Recipient Information</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="recipientName">Recipient Name</Label>
                                <Input
                                  id="recipientName"
                                  placeholder="John Smith"
                                  {...register("recipientName")}
                                  className={errors.recipientName ? "border-red-500" : ""}
                                />
                                {errors.recipientName && (
                                  <p className="text-red-500 text-sm">{errors.recipientName.message}</p>
                                )}
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="recipientEmail">Email (Optional)</Label>
                                <Input
                                  id="recipientEmail"
                                  placeholder="john@example.com"
                                  {...register("recipientEmail")}
                                  className={errors.recipientEmail ? "border-red-500" : ""}
                                />
                                {errors.recipientEmail && (
                                  <p className="text-red-500 text-sm">{errors.recipientEmail.message}</p>
                                )}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                              <div className="space-y-2">
                                <Label htmlFor="recipientAccountNumber">Account Number</Label>
                                <Input
                                  id="recipientAccountNumber"
                                  placeholder="Account Number"
                                  {...register("recipientAccountNumber")}
                                  className={errors.recipientAccountNumber ? "border-red-500" : ""}
                                />
                                {errors.recipientAccountNumber && (
                                  <p className="text-red-500 text-sm">{errors.recipientAccountNumber.message}</p>
                                )}
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="recipientRoutingNumber">Routing Number (Optional)</Label>
                                <Input
                                  id="recipientRoutingNumber"
                                  placeholder="9 digits"
                                  {...register("recipientRoutingNumber")}
                                  className={errors.recipientRoutingNumber ? "border-red-500" : ""}
                                />
                                {errors.recipientRoutingNumber && (
                                  <p className="text-red-500 text-sm">{errors.recipientRoutingNumber.message}</p>
                                )}
                              </div>
                            </div>

                            <div className="space-y-2 mt-4">
                              <Label htmlFor="recipientBank">Bank Name</Label>
                              <Input
                                id="recipientBank"
                                placeholder="Recipient's Bank"
                                {...register("recipientBank")}
                                className={errors.recipientBank ? "border-red-500" : ""}
                              />
                              {errors.recipientBank && (
                                <p className="text-red-500 text-sm">{errors.recipientBank.message}</p>
                              )}
                            </div>
                          </div>

                          {/* Transfer Details */}
                          <div className="border-t pt-6">
                            <h3 className="text-lg font-medium mb-4">Transfer Details</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="amount">Amount</Label>
                                <div className="relative">
                                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                                  <Input
                                    id="amount"
                                    placeholder="0.00"
                                    className={`pl-8 ${errors.amount ? "border-red-500" : ""}`}
                                    {...register("amount")}
                                  />
                                </div>
                                {errors.amount && (
                                  <p className="text-red-500 text-sm">{errors.amount.message}</p>
                                )}
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="memo">Memo/Note (Optional)</Label>
                                <Input
                                  id="memo"
                                  placeholder="What's this for?"
                                  {...register("memo")}
                                />
                              </div>
                            </div>

                            {/* Transfer Date */}
                            <div className="mt-4 space-y-2">
                              <Label>When to Transfer</Label>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                  <input
                                    type="radio"
                                    value="now"
                                    id="transfer-now"
                                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                    {...register("transferDate")}
                                  />
                                  <Label htmlFor="transfer-now" className="text-sm cursor-pointer flex items-center">
                                    <Clock className="h-4 w-4 mr-2" />
                                    Transfer now
                                  </Label>
                                </div>

                                <div className="flex items-center space-x-2">
                                  <input
                                    type="radio"
                                    value="scheduled"
                                    id="transfer-scheduled"
                                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                    {...register("transferDate")}
                                  />
                                  <Label htmlFor="transfer-scheduled" className="text-sm cursor-pointer flex items-center">
                                    <CalendarClock className="h-4 w-4 mr-2" />
                                    Schedule for later
                                  </Label>
                                </div>
                              </div>

                              {watchTransferDate === "scheduled" && (
                                <div className="pt-2">
                                  <Input
                                    type="date"
                                    id="scheduleDate"
                                    {...register("scheduleDate")}
                                    min={new Date().toISOString().split('T')[0]}
                                  />
                                </div>
                              )}
                            </div>

                            <div className="flex items-center space-x-2 mt-4">
                              <Checkbox
                                id="saveRecipient"
                                checked={watch("saveRecipient")}
                                onCheckedChange={(checked) =>
                                  setValue("saveRecipient", checked as boolean)
                                }
                              />
                              <Label htmlFor="saveRecipient" className="text-sm cursor-pointer">
                                Save this recipient for future transfers
                              </Label>
                            </div>
                          </div>

                          {/* Security Notice */}
                          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm flex items-start">
                            <Shield className="h-5 w-5 text-blue-500 mt-0.5 mr-3 shrink-0" />
                            <div>
                              <p className="text-blue-800 font-medium">Enhanced Security</p>
                              <p className="text-blue-700 mt-1">
                                Your transfer is protected with bank-level encryption and two-factor authentication.
                                We will never share your financial information with third parties.
                              </p>
                            </div>
                          </div>
                        </form>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" type="button">
                          Cancel
                        </Button>
                        <Button
                          className="custom-button"
                          type="submit"
                          form="transfer-form"
                          disabled={isLoading}
                        >
                          {isLoading ? "Processing..." : "Continue"}
                        </Button>
                      </CardFooter>
                    </Card>
                  </AnimatedFadeIn>
                </div>

                {/* Sidebar */}
                <div>
                  <div className="space-y-6">
                    {/* Recent Recipients Card */}
                    <AnimatedFadeIn delay={0.1}>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Recent Recipients</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div className="divide-y">
                            {recentRecipients.map((recipient) => (
                              <button
                                key={recipient.id}
                                className={`w-full text-left px-4 py-3 hover:bg-slate-50 ${
                                  selectedRecipient === recipient.id ? "bg-slate-50" : ""
                                }`}
                                onClick={() => handleSelectRecipient(recipient)}
                              >
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h4 className="font-medium">{recipient.name}</h4>
                                    <p className="text-xs text-muted-foreground">{recipient.bank}</p>
                                  </div>
                                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                </div>
                              </button>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedFadeIn>

                    {/* Transfer Tips Card */}
                    <AnimatedFadeIn delay={0.2}>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Transfer Tips</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                          <div className="flex gap-3">
                            <Shield className="h-5 w-5 text-green-500 shrink-0" />
                            <p>Verify recipient details before sending money.</p>
                          </div>
                          <div className="flex gap-3">
                            <Clock className="h-5 w-5 text-green-500 shrink-0" />
                            <p>Transfers to other banks may take 1-3 business days.</p>
                          </div>
                          <div className="flex gap-3">
                            <Repeat className="h-5 w-5 text-green-500 shrink-0" />
                            <p>Set up recurring transfers for regular payments.</p>
                          </div>
                          <div className="flex gap-3">
                            <Globe className="h-5 w-5 text-green-500 shrink-0" />
                            <p>International transfers may have additional fees.</p>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedFadeIn>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

          {/* Transfer History Tab */}
          <TabsContent value="history" className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <div className="relative md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search transfers..." className="pl-9" />
              </div>
              <div className="flex gap-3">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <CalendarClock className="h-4 w-4 mr-2" />
                  Date Range
                </Button>
              </div>
            </div>

            <AnimatedFadeIn>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Transfer History</CardTitle>
                    <Button variant="outline" size="sm">
                      Download Statement
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">Recipient</th>
                          <th className="text-left py-3 px-4 font-medium">Date</th>
                          <th className="text-left py-3 px-4 font-medium">Source</th>
                          <th className="text-right py-3 px-4 font-medium">Amount</th>
                          <th className="text-right py-3 px-4 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {transferHistory.map((transfer) => (
                          <tr key={transfer.id} className="hover:bg-slate-50">
                            <td className="py-3 px-4">{transfer.recipient}</td>
                            <td className="py-3 px-4">{transfer.date}</td>
                            <td className="py-3 px-4">{transfer.source}</td>
                            <td className="py-3 px-4 text-right font-medium">
                              {formatCurrency(transfer.amount)}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                                {transfer.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-muted-foreground">Showing 6 of 24 transfers</p>
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
          </TabsContent>

          {/* Placeholder for other tabs */}
          <TabsContent value="recurring">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-muted-foreground">
                Recurring Transfers will be implemented in the next version
              </h3>
            </div>
          </TabsContent>

          <TabsContent value="international">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-muted-foreground">
                International Transfers will be implemented in the next version
              </h3>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
