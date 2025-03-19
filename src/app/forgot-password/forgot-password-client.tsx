"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedFadeIn } from "@/components/ui/animated-section";
import { Loader2, CheckCircle2, ArrowLeft, Mail } from "lucide-react";

// Form validation schema
const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordClient() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  // Initialize form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // In a real application, this would be an API call to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, let's simulate a successful request
      console.log("Password reset email sent to:", data.email);

      // Store the email for the success message
      setSubmittedEmail(data.email);

      // Show success message
      setIsSubmitSuccessful(true);
    } catch (error) {
      console.error("Failed to send reset email", error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-md mx-auto">
          <AnimatedFadeIn>
            <Card className="border shadow-lg">
              <CardHeader className="space-y-1">
                {isSubmitSuccessful ? (
                  <>
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">
                      Check your email
                    </CardTitle>
                    <CardDescription className="text-center">
                      We've sent a password reset link to
                      <div className="font-medium mt-1">{submittedEmail}</div>
                    </CardDescription>
                  </>
                ) : (
                  <>
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">
                      Forgot your password?
                    </CardTitle>
                    <CardDescription className="text-center">
                      Enter your email and we'll send you a link to reset your password.
                    </CardDescription>
                  </>
                )}
              </CardHeader>

              <CardContent>
                {isSubmitSuccessful ? (
                  <div className="space-y-4">
                    <p className="text-sm text-center text-muted-foreground">
                      If you don't see the email in your inbox, please check your spam folder or try again.
                    </p>
                    <Button
                      className="w-full"
                      variant="outline"
                      onClick={() => setIsSubmitSuccessful(false)}
                    >
                      Try a different email
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        autoComplete="email"
                        {...register("email")}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                      )}
                    </div>

                    {error && (
                      <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                        {error}
                      </div>
                    )}

                    <Button type="submit" className="w-full custom-button" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending link...
                        </>
                      ) : (
                        "Send Reset Link"
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>

              <CardFooter className="justify-center pb-6 pt-0">
                <Link
                  href="/login"
                  className="text-primary flex items-center gap-1 text-sm hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to login
                </Link>
              </CardFooter>
            </Card>
          </AnimatedFadeIn>
        </div>
      </div>
    </section>
  );
}
