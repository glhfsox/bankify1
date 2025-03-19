"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedSection, AnimatedFadeIn } from "@/components/ui/animated-section";
import { EyeIcon, EyeOffIcon, Loader2, CheckCircle2, ArrowRight } from "lucide-react";

// Form validation schema
const signupSchema = z.object({
  accountType: z.enum(["personal", "business"]),
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
  confirmPassword: z.string(),
  country: z.string().min(1, { message: "Country is required" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignupFormData = z.infer<typeof signupSchema>;

export function SignupClient() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signupError, setSignupError] = useState<string | null>(null);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  // Initialize form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      accountType: "personal",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
      phone: "",
      termsAccepted: false,
    },
  });

  // Watch account type for conditional display
  const accountType = watch("accountType");

  // Handle select field changes
  const handleSelectChange = (field: keyof SignupFormData, value: string) => {
    setValue(field, value as any, { shouldValidate: true });
  };

  // Handle checkbox field changes
  const handleCheckboxChange = (field: keyof SignupFormData, checked: boolean) => {
    setValue(field, checked as any, { shouldValidate: true });
  };

  // Handle form submission
  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    setSignupError(null);

    // Simulate API call for registration
    try {
      // In a real application, this would be an API call to your backend
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For demo purposes, let's simulate a successful registration
      console.log("Registration successful", data);

      // Set registration complete to show success message
      setRegistrationComplete(true);

      // In a real app, you might redirect after successful registration
      // For demo, we'll stay on the page to show the success message
    } catch (error) {
      console.error("Registration failed", error);
      setSignupError("Registration failed. Please try again or contact support.");
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <AnimatedFadeIn>
            {registrationComplete ? (
              <Card className="border shadow-lg text-center py-8">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h2 className="text-2xl font-bold">Registration Successful!</h2>
                    <p className="text-muted-foreground max-w-md mx-auto mb-4">
                      Your account has been created successfully. Please check your email to verify your account.
                    </p>
                    <div className="space-y-4 pt-4">
                      <Button
                        className="custom-button w-full max-w-xs"
                        onClick={() => router.push("/login")}
                      >
                        Proceed to Login
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full max-w-xs"
                        onClick={() => router.push("/")}
                      >
                        Return to Home
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border shadow-lg">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
                  <CardDescription className="text-center">
                    Join thousands of users managing their finances with Bankify
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="personal" className="mb-6">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                      <TabsTrigger
                        value="personal"
                        onClick={() => handleSelectChange("accountType", "personal")}
                        className={accountType === "personal" ? "font-medium" : ""}
                      >
                        Personal Account
                      </TabsTrigger>
                      <TabsTrigger
                        value="business"
                        onClick={() => handleSelectChange("accountType", "business")}
                        className={accountType === "business" ? "font-medium" : ""}
                      >
                        Business Account
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="personal">
                      <p className="text-sm text-muted-foreground mb-4">
                        Perfect for individuals looking to manage personal finances, save, and invest.
                      </p>
                    </TabsContent>
                    <TabsContent value="business">
                      <p className="text-sm text-muted-foreground mb-4">
                        Designed for businesses of all sizes with advanced features for financial management and team collaboration.
                      </p>
                    </TabsContent>
                  </Tabs>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          {...register("firstName")}
                          className={errors.firstName ? "border-red-500" : ""}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          {...register("lastName")}
                          className={errors.lastName ? "border-red-500" : ""}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Email Field */}
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

                    {/* Country & Phone Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("country", value)}
                          defaultValue=""
                        >
                          <SelectTrigger
                            id="country"
                            className={errors.country ? "border-red-500" : ""}
                          >
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="de">Germany</SelectItem>
                            <SelectItem value="fr">France</SelectItem>
                            <SelectItem value="es">Spain</SelectItem>
                            <SelectItem value="it">Italy</SelectItem>
                            <SelectItem value="jp">Japan</SelectItem>
                            <SelectItem value="sg">Singapore</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.country && (
                          <p className="text-red-500 text-sm">{errors.country.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          {...register("phone")}
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          {...register("password")}
                          className={errors.password ? "border-red-500 pr-10" : "pr-10"}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          tabIndex={-1}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-4 w-4" />
                          ) : (
                            <EyeIcon className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                      )}
                      {!errors.password && (
                        <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                          <li>At least 8 characters long</li>
                          <li>Include uppercase and lowercase letters</li>
                          <li>Include at least one number and special character</li>
                        </ul>
                      )}
                    </div>

                    {/* Confirm Password Field */}
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="••••••••"
                          {...register("confirmPassword")}
                          className={errors.confirmPassword ? "border-red-500 pr-10" : "pr-10"}
                        />
                        <button
                          type="button"
                          onClick={toggleConfirmPasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          tabIndex={-1}
                        >
                          {showConfirmPassword ? (
                            <EyeOffIcon className="h-4 w-4" />
                          ) : (
                            <EyeIcon className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                      )}
                    </div>

                    {/* Terms and Conditions Checkbox */}
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="termsAccepted"
                          checked={watch("termsAccepted")}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("termsAccepted", checked as boolean)
                          }
                          className={errors.termsAccepted ? "border-red-500" : ""}
                        />
                        <Label htmlFor="termsAccepted" className="text-sm cursor-pointer leading-tight">
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                      {errors.termsAccepted && (
                        <p className="text-red-500 text-sm">{errors.termsAccepted.message}</p>
                      )}
                    </div>

                    {/* Error Message */}
                    {signupError && (
                      <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                        {signupError}
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button type="submit" className="w-full custom-button" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating account...
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </Button>

                    {/* Social Sign-up Buttons */}
                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-muted-foreground">
                          Or sign up with
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full">
                        <Image
                          src="https://ext.same-assets.com/1063842428/798649147.svg+xml"
                          alt="Google"
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                        Google
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Image
                          src="https://ext.same-assets.com/2249124204/2396142301.svg+xml"
                          alt="Apple"
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                        Apple
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="justify-center pb-6">
                  <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary font-medium hover:underline">
                      Sign in
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            )}
          </AnimatedFadeIn>
        </div>
      </div>
    </section>
  );
}
