"use client";

import { useState, useEffect } from "react";
import {
  Bell,
  BellPlus,
  BellOff,
  Check,
  CreditCard,
  DollarSign,
  HelpCircle,
  Info,
  Lock,
  RefreshCw,
  Settings,
  Shield,
  Smartphone,
  Trash,
  AlertCircle,
  CheckCircle,
  Clock,
  LogIn,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "@/components/ui/animated-section";
import { Checkbox } from "@/components/ui/checkbox";

// Mock data for active alerts
const activeAlerts = [
  {
    id: "alert_1",
    type: "balance",
    icon: <DollarSign className="h-4 w-4" />,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
    name: "Low Balance",
    description: "Alert when any account balance falls below $100",
    threshold: 100,
    method: ["email", "push"],
    status: "active",
  },
  {
    id: "alert_2",
    type: "transaction",
    icon: <CreditCard className="h-4 w-4" />,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
    name: "Large Transaction",
    description: "Alert for any transaction above $500",
    threshold: 500,
    method: ["email", "sms", "push"],
    status: "active",
  },
  {
    id: "alert_3",
    type: "security",
    icon: <Shield className="h-4 w-4" />,
    iconColor: "text-red-600",
    iconBg: "bg-red-100",
    name: "Login Attempt",
    description: "Alert for login attempts from new devices",
    method: ["email", "sms"],
    status: "active",
  },
  {
    id: "alert_4",
    type: "deposit",
    icon: <RefreshCw className="h-4 w-4" />,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    name: "Direct Deposit",
    description: "Alert when direct deposit is received",
    method: ["email"],
    status: "active",
  },
  {
    id: "alert_5",
    type: "payment",
    icon: <Clock className="h-4 w-4" />,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
    name: "Bill Payment Due",
    description: "Alert 3 days before bill payments are due",
    method: ["email", "push"],
    status: "active",
  }
];

// Mock data for available alert types
const availableAlertTypes = [
  {
    id: "balance",
    name: "Balance Alerts",
    description: "Get notified about changes to your account balance",
    icon: <DollarSign className="h-5 w-5" />,
    options: [
      { id: "low_balance", name: "Low Balance" },
      { id: "high_balance", name: "High Balance" },
      { id: "balance_change", name: "Balance Changes" }
    ]
  },
  {
    id: "transaction",
    name: "Transaction Alerts",
    description: "Get notified about transactions on your accounts",
    icon: <CreditCard className="h-5 w-5" />,
    options: [
      { id: "large_transaction", name: "Large Transactions" },
      { id: "international_transaction", name: "International Transactions" },
      { id: "recurring_transaction", name: "Recurring Transactions" }
    ]
  },
  {
    id: "security",
    name: "Security Alerts",
    description: "Stay informed about security-related events",
    icon: <Shield className="h-5 w-5" />,
    options: [
      { id: "login_attempt", name: "Login Attempts" },
      { id: "password_change", name: "Password Changes" },
      { id: "profile_update", name: "Profile Updates" }
    ]
  },
  {
    id: "payment",
    name: "Payment Alerts",
    description: "Get notified about payments and transfers",
    icon: <RefreshCw className="h-5 w-5" />,
    options: [
      { id: "bill_payment", name: "Bill Payments" },
      { id: "payment_due", name: "Payment Due" },
      { id: "transfer_complete", name: "Transfer Complete" }
    ]
  }
];

// Mock data for recent notifications
const recentNotifications = [
  {
    id: "notif_1",
    title: "Large Transaction Detected",
    message: "A transaction of $750.00 was made with your card ending in 3456.",
    date: "Today, 10:45 AM",
    icon: <AlertCircle className="h-5 w-5" />,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    unread: true
  },
  {
    id: "notif_2",
    title: "Bill Payment Successful",
    message: "Your payment of $85.72 to Electric Company was successful.",
    date: "Yesterday, 3:20 PM",
    icon: <CheckCircle className="h-5 w-5" />,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    unread: false
  },
  {
    id: "notif_3",
    title: "New Login Detected",
    message: "A login was detected from a new device in San Francisco, CA.",
    date: "Mar 15, 2025",
    icon: <LogIn className="h-5 w-5" />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    unread: false
  },
  {
    id: "notif_4",
    title: "Low Balance Alert",
    message: "Your checking account balance has fallen below $100.",
    date: "Mar 14, 2025",
    icon: <DollarSign className="h-5 w-5" />,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    unread: false
  }
];

export function AlertsClient() {
  const [activeTab, setActiveTab] = useState("manage");
  const [creatingAlert, setCreatingAlert] = useState(false);
  const [editingAlert, setEditingAlert] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    alertType: "",
    alertOption: "",
    threshold: "",
    notificationMethods: {
      email: true,
      sms: false,
      push: true
    },
    accounts: {
      checking: true,
      savings: true,
      credit: true
    }
  });

  const handleCreateAlert = () => {
    setCreatingAlert(true);
    // Reset form
    setFormData({
      alertType: "",
      alertOption: "",
      threshold: "",
      notificationMethods: {
        email: true,
        sms: false,
        push: true
      },
      accounts: {
        checking: true,
        savings: true,
        credit: true
      }
    });
  };

  const handleCancelCreate = () => {
    setCreatingAlert(false);
    setEditingAlert(null);
  };

  const handleEditAlert = (alertId: string) => {
    setEditingAlert(alertId);
    // In a real app, you would populate the form with the alert's data
  };

  const handleSaveAlert = () => {
    // In a real app, you would save the alert to the backend
    setCreatingAlert(false);
    setEditingAlert(null);
  };

  const handleDeleteAlert = (alertId: string) => {
    // In a real app, you would delete the alert from the backend
    console.log(`Deleting alert ${alertId}`);
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-slate-50 border-b">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Personalized Alerts</h1>
              <p className="text-muted-foreground">
                Stay informed about your account activity with customized alerts.
              </p>
            </div>
            {!creatingAlert && !editingAlert && (
              <Button className="custom-button" onClick={handleCreateAlert}>
                <BellPlus className="h-4 w-4 mr-2" />
                Create New Alert
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <Tabs defaultValue="manage" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="manage">Manage Alerts</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="preferences">Alert Preferences</TabsTrigger>
          </TabsList>

          {/* Manage Alerts Tab */}
          <TabsContent value="manage" className="space-y-8">
            {creatingAlert || editingAlert ? (
              <AnimatedFadeIn>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {editingAlert ? "Edit Alert" : "Create New Alert"}
                    </CardTitle>
                    <CardDescription>
                      {editingAlert
                        ? "Modify your existing alert settings"
                        : "Set up a new alert to stay informed about your account activity"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Alert Type */}
                    <div className="space-y-2">
                      <Label htmlFor="alertType">Alert Type</Label>
                      <Select
                        value={formData.alertType}
                        onValueChange={(value) => setFormData({...formData, alertType: value})}
                      >
                        <SelectTrigger id="alertType">
                          <SelectValue placeholder="Select alert type" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableAlertTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              <div className="flex items-center">
                                <div className="mr-2">{type.icon}</div>
                                <span>{type.name}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Alert Option */}
                    {formData.alertType && (
                      <div className="space-y-2">
                        <Label htmlFor="alertOption">Alert Option</Label>
                        <Select
                          value={formData.alertOption}
                          onValueChange={(value) => setFormData({...formData, alertOption: value})}
                        >
                          <SelectTrigger id="alertOption">
                            <SelectValue placeholder="Select specific alert" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableAlertTypes
                              .find(type => type.id === formData.alertType)
                              ?.options.map((option) => (
                                <SelectItem key={option.id} value={option.id}>
                                  {option.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {/* Threshold (for applicable alerts) */}
                    {(formData.alertOption === "low_balance" ||
                       formData.alertOption === "high_balance" ||
                       formData.alertOption === "large_transaction") && (
                      <div className="space-y-2">
                        <Label htmlFor="threshold">
                          {formData.alertOption === "low_balance" && "Minimum Balance Threshold"}
                          {formData.alertOption === "high_balance" && "Maximum Balance Threshold"}
                          {formData.alertOption === "large_transaction" && "Transaction Amount Threshold"}
                        </Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                          <Input
                            id="threshold"
                            type="number"
                            placeholder="0.00"
                            className="pl-8"
                            value={formData.threshold}
                            onChange={(e) => setFormData({...formData, threshold: e.target.value})}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {formData.alertOption === "low_balance" && "You'll receive an alert when your balance falls below this amount"}
                          {formData.alertOption === "high_balance" && "You'll receive an alert when your balance exceeds this amount"}
                          {formData.alertOption === "large_transaction" && "You'll receive an alert for transactions above this amount"}
                        </p>
                      </div>
                    )}

                    {/* Notification Methods */}
                    <div className="space-y-2">
                      <Label>Notification Methods</Label>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>Email</span>
                          </div>
                          <Switch
                            checked={formData.notificationMethods.email}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                notificationMethods: {
                                  ...formData.notificationMethods,
                                  email: checked
                                }
                              })
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-2">
                            <Smartphone className="h-4 w-4 text-muted-foreground" />
                            <span>SMS Text</span>
                          </div>
                          <Switch
                            checked={formData.notificationMethods.sms}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                notificationMethods: {
                                  ...formData.notificationMethods,
                                  sms: checked
                                }
                              })
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-2">
                            <Bell className="h-4 w-4 text-muted-foreground" />
                            <span>Push Notification</span>
                          </div>
                          <Switch
                            checked={formData.notificationMethods.push}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                notificationMethods: {
                                  ...formData.notificationMethods,
                                  push: checked
                                }
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    {/* Accounts */}
                    <div className="space-y-2">
                      <Label>Apply to Accounts</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="checking"
                            checked={formData.accounts.checking}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                accounts: {
                                  ...formData.accounts,
                                  checking: checked as boolean
                                }
                              })
                            }
                          />
                          <Label htmlFor="checking" className="text-sm cursor-pointer">Premium Checking (**** 4582)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="savings"
                            checked={formData.accounts.savings}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                accounts: {
                                  ...formData.accounts,
                                  savings: checked as boolean
                                }
                              })
                            }
                          />
                          <Label htmlFor="savings" className="text-sm cursor-pointer">High-Yield Savings (**** 7891)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="credit"
                            checked={formData.accounts.credit}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                accounts: {
                                  ...formData.accounts,
                                  credit: checked as boolean
                                }
                              })
                            }
                          />
                          <Label htmlFor="credit" className="text-sm cursor-pointer">Platinum Credit Card (**** 3456)</Label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={handleCancelCreate}>
                      Cancel
                    </Button>
                    <Button className="custom-button" onClick={handleSaveAlert}>
                      {editingAlert ? "Save Changes" : "Create Alert"}
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedFadeIn>
            ) : (
              <div className="space-y-6">
                {/* Active Alerts */}
                {activeAlerts.length > 0 ? (
                  <div className="space-y-4">
                    {activeAlerts.map((alert, index) => (
                      <AnimatedFadeIn key={alert.id} delay={index * 0.05}>
                        <Card>
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                              <div className="flex items-start gap-4">
                                <div className={`${alert.iconBg} h-10 w-10 rounded-full flex items-center justify-center shrink-0`}>
                                  <div className={alert.iconColor}>
                                    {alert.icon}
                                  </div>
                                </div>
                                <div>
                                  <h3 className="font-medium">{alert.name}</h3>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {alert.description}
                                  </p>

                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {alert.method.includes("email") && (
                                      <Badge variant="outline" className="text-xs">
                                        Email
                                      </Badge>
                                    )}
                                    {alert.method.includes("sms") && (
                                      <Badge variant="outline" className="text-xs">
                                        SMS
                                      </Badge>
                                    )}
                                    {alert.method.includes("push") && (
                                      <Badge variant="outline" className="text-xs">
                                        Push
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleEditAlert(alert.id)}
                                >
                                  Edit
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleDeleteAlert(alert.id)}
                                >
                                  <Trash className="h-4 w-4 text-red-500" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedFadeIn>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium">No alerts set up yet</h3>
                    <p className="text-muted-foreground mt-1 mb-6">
                      Get notified about important account activity by creating custom alerts.
                    </p>
                    <Button className="custom-button" onClick={handleCreateAlert}>
                      <BellPlus className="h-4 w-4 mr-2" />
                      Create Your First Alert
                    </Button>
                  </div>
                )}
              </div>
            )}
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Notifications</h2>
                <Button variant="outline" size="sm">
                  Mark All as Read
                </Button>
              </div>

              {recentNotifications.map((notification, index) => (
                <AnimatedFadeIn key={notification.id} delay={index * 0.05}>
                  <Card className={notification.unread ? "border-primary/50" : ""}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className={`${notification.iconBg} h-10 w-10 rounded-full flex items-center justify-center shrink-0`}>
                          <div className={notification.iconColor}>
                            {notification.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium flex items-center">
                              {notification.title}
                              {notification.unread && (
                                <Badge className="ml-2 bg-primary/20 text-primary hover:bg-primary/30 px-2">
                                  New
                                </Badge>
                              )}
                            </h3>
                            <span className="text-sm text-muted-foreground">{notification.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedFadeIn>
              ))}

              <div className="text-center pt-4">
                <Button variant="outline">
                  View All Notifications
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Alert Preferences Tab */}
          <TabsContent value="preferences">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Manage how and when you receive notifications from Bankify
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contact Methods */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Contact Methods</h3>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 border rounded-md">
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-sm text-muted-foreground">johndoe@example.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-50 text-green-600">
                            Verified
                          </Badge>
                          <Button variant="ghost" size="sm">
                            Change
                          </Button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-4 border rounded-md">
                        <div>
                          <h4 className="font-medium">Phone Number</h4>
                          <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-50 text-green-600">
                            Verified
                          </Badge>
                          <Button variant="ghost" size="sm">
                            Change
                          </Button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-4 border rounded-md">
                        <div>
                          <h4 className="font-medium">Push Notifications</h4>
                          <p className="text-sm text-muted-foreground">iPhone 14 Pro, iPad Pro</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-50 text-green-600">
                            Enabled
                          </Badge>
                          <Button variant="ghost" size="sm">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notification Settings */}
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="text-lg font-medium">Global Settings</h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Quiet Hours</h4>
                          <p className="text-sm text-muted-foreground">Don't send notifications during selected hours</p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>

                      <div className="grid grid-cols-2 gap-4 pl-0 md:pl-8">
                        <div className="space-y-2">
                          <Label htmlFor="quiet-start">Start Time</Label>
                          <Select defaultValue="22">
                            <SelectTrigger id="quiet-start">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {[...Array(24)].map((_, i) => (
                                <SelectItem key={i} value={i.toString()}>
                                  {i === 0 ? "12:00 AM" : i < 12 ? `${i}:00 AM` : i === 12 ? "12:00 PM" : `${i-12}:00 PM`}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="quiet-end">End Time</Label>
                          <Select defaultValue="7">
                            <SelectTrigger id="quiet-end">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {[...Array(24)].map((_, i) => (
                                <SelectItem key={i} value={i.toString()}>
                                  {i === 0 ? "12:00 AM" : i < 12 ? `${i}:00 AM` : i === 12 ? "12:00 PM" : `${i-12}:00 PM`}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Marketing Notifications</h4>
                          <p className="text-sm text-muted-foreground">Receive updates about new features and promotions</p>
                        </div>
                        <Switch defaultChecked={false} />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="custom-button">
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
