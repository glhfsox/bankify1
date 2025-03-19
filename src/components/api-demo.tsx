"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, ChevronRight, Check, AlertCircle } from "lucide-react";

interface ApiDemoProps {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  params?: Record<string, any>;
  description: string;
}

type ApiStatus = "idle" | "loading" | "success" | "error";

export function ApiDemo({ endpoint, method, params = {}, description }: ApiDemoProps) {
  const [status, setStatus] = useState<ApiStatus>("idle");
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Format the request body as JSON string
  const requestBody = JSON.stringify(params, null, 2);

  // Simulate an API call
  const makeApiCall = async () => {
    setStatus("loading");
    setError(null);

    try {
      // In a real app, this would be an actual API call
      // For demo purposes, we'll simulate a successful API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate different responses based on endpoint and method
      let demoResponse;

      if (endpoint.includes("accounts")) {
        demoResponse = {
          success: true,
          data: [
            {
              id: "acct_123456",
              type: "checking",
              balance: 2547.83,
              currency: "USD",
              name: "Primary Checking",
              status: "active",
              createdAt: new Date().toISOString()
            },
            {
              id: "acct_789012",
              type: "savings",
              balance: 15750.20,
              currency: "USD",
              name: "High-Yield Savings",
              status: "active",
              createdAt: new Date().toISOString()
            }
          ],
          meta: {
            total: 2,
            page: 1,
            limit: 10
          }
        };
      } else if (endpoint.includes("transactions")) {
        demoResponse = {
          success: true,
          data: [
            {
              id: "txn_123456",
              amount: -75.50,
              currency: "USD",
              description: "Restaurant payment",
              category: "dining",
              status: "completed",
              createdAt: new Date().toISOString()
            },
            {
              id: "txn_789012",
              amount: 1500.00,
              currency: "USD",
              description: "Salary deposit",
              category: "income",
              status: "completed",
              createdAt: new Date().toISOString()
            },
            {
              id: "txn_345678",
              amount: -120.75,
              currency: "USD",
              description: "Utility payment",
              category: "utilities",
              status: "completed",
              createdAt: new Date().toISOString()
            }
          ],
          meta: {
            total: 3,
            page: 1,
            limit: 10
          }
        };
      } else if (endpoint.includes("payments")) {
        demoResponse = {
          success: true,
          data: {
            id: "pmt_123456",
            amount: params.amount?.value || 100.00,
            currency: params.amount?.currency || "USD",
            sourceAccount: params.sourceAccountId || "acct_123456",
            destinationAccount: params.destinationAccountId || "acct_789012",
            description: params.description || "Payment transfer",
            status: "processing",
            estimatedCompletion: new Date(Date.now() + 86400000).toISOString(),
            createdAt: new Date().toISOString()
          }
        };
      } else if (endpoint.includes("auth")) {
        demoResponse = {
          success: true,
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
          expiresIn: 3600,
          scope: params.scope || ["accounts:read", "transactions:read"],
          userId: params.userId || "user123"
        };
      } else {
        // Default response
        demoResponse = {
          success: true,
          message: "Operation completed successfully",
          requestedAt: new Date().toISOString()
        };
      }

      setResponse(demoResponse);
      setStatus("success");
    } catch (err) {
      console.error("API call failed:", err);
      setError("An error occurred while making the API call.");
      setStatus("error");
    }
  };

  return (
    <div className="rounded-lg border overflow-hidden">
      <div className="bg-slate-100 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`
            inline-block mr-2 px-2 py-1 text-xs font-bold rounded
            ${method === "GET" ? "bg-blue-100 text-blue-700" : ""}
            ${method === "POST" ? "bg-green-100 text-green-700" : ""}
            ${method === "PUT" ? "bg-amber-100 text-amber-700" : ""}
            ${method === "DELETE" ? "bg-red-100 text-red-700" : ""}
          `}>
            {method}
          </span>
          <code className="text-sm font-mono">{endpoint}</code>
        </div>
        <Button
          size="sm"
          variant={status === "success" ? "outline" : "default"}
          onClick={makeApiCall}
          disabled={status === "loading"}
        >
          {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {status === "success" && <Check className="mr-2 h-4 w-4" />}
          {status === "error" && <AlertCircle className="mr-2 h-4 w-4" />}
          {status === "idle" && "Execute"}
          {status === "loading" && "Processing..."}
          {status === "success" && "Run Again"}
          {status === "error" && "Try Again"}
        </Button>
      </div>

      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Request Body */}
          <div>
            <h4 className="text-sm font-medium mb-2">Request</h4>
            <div className="bg-slate-950 text-slate-50 p-3 rounded-md overflow-x-auto">
              <pre className="text-xs font-mono">{requestBody}</pre>
            </div>
          </div>

          {/* Response */}
          <div>
            <h4 className="text-sm font-medium mb-2">Response</h4>
            <div className={`bg-slate-950 text-slate-50 p-3 rounded-md overflow-x-auto min-h-[120px] flex flex-col ${status === "loading" ? "justify-center items-center" : ""}`}>
              {status === "idle" && (
                <div className="text-xs text-slate-400 h-full flex items-center justify-center">
                  <p>Execute the request to see the response</p>
                </div>
              )}

              {status === "loading" && (
                <Loader2 className="h-6 w-6 animate-spin text-blue-400" />
              )}

              {status === "error" && (
                <div className="text-xs text-red-400">
                  <AlertCircle className="h-4 w-4 mb-2" />
                  <p>{error}</p>
                </div>
              )}

              {status === "success" && (
                <pre className="text-xs font-mono">{JSON.stringify(response, null, 2)}</pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
