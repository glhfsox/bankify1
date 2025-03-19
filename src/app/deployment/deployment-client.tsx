"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle, Clock, ExternalLink, Github, Globe, Server } from "lucide-react";

export function DeploymentClient() {
  const [deploymentStatus, setDeploymentStatus] = useState("success");
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState("overview");

  // Simulate loading deployment data
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const deploymentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="py-12">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Deployment Status</h1>
            <p className="text-muted-foreground">
              Monitor and manage your Bankify deployment on Vercel
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className={`h-3 w-3 rounded-full ${deploymentStatus === "success" ? "bg-green-500" : "bg-amber-500"}`}></div>
            <span className="text-sm font-medium">
              {deploymentStatus === "success" ? "Production deployment active" : "Deployment in progress"}
            </span>
          </div>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" onClick={() => setCurrentTab("overview")}>Overview</TabsTrigger>
              <TabsTrigger value="domains" onClick={() => setCurrentTab("domains")}>Domains</TabsTrigger>
              <TabsTrigger value="logs" onClick={() => setCurrentTab("logs")}>Logs</TabsTrigger>
              <TabsTrigger value="settings" onClick={() => setCurrentTab("settings")}>Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Production Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-semibold">Healthy</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Last deployed: {deploymentDate}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Framework</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Image
                        src="https://ext.same-assets.com/1838401212/2117878651.png"
                        alt="Next.js"
                        width={18}
                        height={18}
                        className="mr-2"
                      />
                      <span className="font-semibold">Next.js</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Version: 15.2.0</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Git Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Github className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Connected</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Branch: main</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Recent Deployments</CardTitle>
                  <CardDescription>View your deployment history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <div>
                          <p className="font-medium text-sm">Production</p>
                          <p className="text-xs text-muted-foreground">Deployed {deploymentDate}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4 mr-1" /> View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <div>
                          <p className="font-medium text-sm">Preview</p>
                          <p className="text-xs text-muted-foreground">Deployed yesterday</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4 mr-1" /> View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Deployment Statistics</CardTitle>
                  <CardDescription>Usage metrics and performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Total Builds</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Avg. Build Time</p>
                      <p className="text-2xl font-bold">45s</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Deployed Pages</p>
                      <p className="text-2xl font-bold">21</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <Link href="https://vercel.com/dashboard" target="_blank" className="inline-flex items-center text-sm text-primary">
                    View detailed analytics on Vercel
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="domains" className="mt-6">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Production Domains</CardTitle>
                  <CardDescription>Manage your custom domains</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 mr-3 text-gray-500" />
                        <div>
                          <p className="font-medium">your-app.vercel.app</p>
                          <p className="text-xs text-muted-foreground">Default Vercel domain</p>
                        </div>
                      </div>
                      <div className="flex items-center bg-green-100 px-2 py-1 rounded text-xs text-green-700">
                        <CheckCircle className="h-3 w-3 mr-1" /> Active
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-sm font-medium mb-3">Add Custom Domain</h3>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="example.com"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      />
                      <Button>Add</Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      After adding a domain, you'll need to configure DNS settings
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Domain Configuration</CardTitle>
                  <CardDescription>Setup instructions for custom domains</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-2">1. Add domain in Vercel</h3>
                      <p className="text-sm text-muted-foreground">
                        Enter your domain name above or in the Vercel dashboard under project settings
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">2. Configure DNS settings</h3>
                      <p className="text-sm text-muted-foreground">
                        Add these records to your domain provider's DNS settings:
                      </p>
                      <div className="mt-2 p-3 bg-gray-50 rounded-lg text-sm font-mono">
                        <p>A Record: @ → 76.76.21.21</p>
                        <p>CNAME Record: www → cname.vercel-dns.com</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">3. Verify and secure</h3>
                      <p className="text-sm text-muted-foreground">
                        Vercel will automatically issue an SSL certificate for your domain
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="logs" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Deployment Logs</CardTitle>
                  <CardDescription>View build and runtime logs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm h-80 overflow-y-auto">
                    <p>$ next build</p>
                    <p className="text-gray-500">info  - Using webpack 5. Reason: Future-proofed</p>
                    <p className="text-gray-500">info  - Checking validity of types</p>
                    <p className="text-white">- Creating an optimized production build ...</p>
                    <p className="text-gray-500">info  - Compiled successfully</p>
                    <p className="text-gray-500">info  - Collecting page data</p>
                    <p className="text-white">- Generating static pages (21/21)</p>
                    <p className="text-gray-500">info  - Finalizing page optimization</p>
                    <p className="text-white">✓ Compiled successfully</p>
                    <p className="text-gray-500">info  - Collecting build traces</p>
                    <p className="text-white">Route (app)                              Size     First Load JS</p>
                    <p className="text-white">┌ ○ /                                    10.9 kB         179 kB</p>
                    <p className="text-white">├ ○ /_not-found                          978 B           118 kB</p>
                    <p className="text-white">├ ○ /about                               2.65 kB         171 kB</p>
                    <p className="text-white">└ ● /api                                 0 B             118 kB</p>
                    <p className="text-gray-500">+ First Load JS shared by all         118 kB</p>
                    <p className="text-white">  ├ chunks/framework.js                 45.1 kB</p>
                    <p className="text-white">  ├ chunks/main.js                      31.6 kB</p>
                    <p className="text-white">  ├ chunks/pages/_app.js                212 B</p>
                    <p className="text-white">  ├ chunks/webpack.js                   3.29 kB</p>
                    <p className="text-white">  └ css/global.css                      38.3 kB</p>
                    <p className="text-green-400">✓ Build completed successfully</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-6">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Deployment Settings</CardTitle>
                  <CardDescription>Configure your deployment preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b">
                      <div>
                        <h3 className="font-medium">Production Branch</h3>
                        <p className="text-sm text-muted-foreground">Branch used for production deployment</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <select className="px-3 py-1.5 border rounded-md text-sm">
                          <option>main</option>
                          <option>master</option>
                          <option>production</option>
                        </select>
                        <Button variant="outline" size="sm">Save</Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-4 border-b">
                      <div>
                        <h3 className="font-medium">Build Command</h3>
                        <p className="text-sm text-muted-foreground">Command used to build your application</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value="next build"
                          className="w-40 px-3 py-1.5 border rounded-md text-sm"
                        />
                        <Button variant="outline" size="sm">Save</Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-4 border-b">
                      <div>
                        <h3 className="font-medium">Output Directory</h3>
                        <p className="text-sm text-muted-foreground">Directory where build output is stored</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value=".next"
                          className="w-40 px-3 py-1.5 border rounded-md text-sm"
                        />
                        <Button variant="outline" size="sm">Save</Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Node.js Version</h3>
                        <p className="text-sm text-muted-foreground">Version of Node.js used for deployment</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <select className="px-3 py-1.5 border rounded-md text-sm">
                          <option>20.x (Default)</option>
                          <option>18.x (LTS)</option>
                          <option>16.x</option>
                        </select>
                        <Button variant="outline" size="sm">Save</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Environment Variables</CardTitle>
                  <CardDescription>Configure environment-specific settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                      <div>
                        <p className="font-medium text-sm">NEXT_PUBLIC_SITE_URL</p>
                        <p className="text-xs text-muted-foreground">https://your-app.vercel.app</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-red-500">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-sm font-medium mb-3">Add New Environment Variable</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                      <input
                        type="text"
                        placeholder="KEY"
                        className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      />
                      <input
                        type="text"
                        placeholder="Value"
                        className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      />
                    </div>
                    <Button>Add Variable</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
