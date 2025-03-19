"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedFadeIn } from "@/components/ui/animated-section";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(6, { message: "Phone number is required" }),
  message: z.string().min(10, { message: "Message is too short (min 10 characters)" })
});

type FormValues = z.infer<typeof formSchema>;

export function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form data:", data);

    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
              <p className="text-muted-foreground">
                Have questions about Bankify or need assistance? Reach out to our team and we'll get back to you promptly.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedFadeIn delay={0.3}>
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p>
                  Thank you for reaching out. We've received your message and will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      First Name
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      className={`w-full p-3 border rounded-md ${errors.firstName ? "border-red-500" : ""}`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      className={`w-full p-3 border rounded-md ${errors.lastName ? "border-red-500" : ""}`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className={`w-full p-3 border rounded-md ${errors.email ? "border-red-500" : ""}`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className={`w-full p-3 border rounded-md ${errors.phone ? "border-red-500" : ""}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    className={`w-full p-3 border rounded-md min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                    placeholder="Tell us how we can help you"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="custom-button w-full py-6"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </AnimatedFadeIn>
        </div>
      </div>
    </section>
  );
}
