"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedSection, AnimatedStaggered } from "@/components/ui/animated-section";

export function Testimonials() {
  const testimonials = [
    {
      name: "Lena",
      text: "Bankify transformed my banking experience with its intuitive design and powerful features. Its a game-changer for managing finances—highly recommend!",
      image: "https://ext.same-assets.com/1049217180/109667065.svg+xml",
      rating: 5
    },
    {
      name: "John Carter",
      text: "Bankify has simplified my financial management. Its easy to use and extremely efficient!",
      image: "https://ext.same-assets.com/1049217180/109667065.svg+xml",
      rating: 5
    },
    {
      name: "Emily Davis",
      text: "The intuitive design of Bankify has saved me so much time. Its perfect for managing transactions.",
      image: "https://ext.same-assets.com/1049217180/109667065.svg+xml",
      rating: 5
    },
    {
      name: "Michael Brown",
      text: "Bankifys features are exactly what I needed. Its made managing my finances smoother and more organized.",
      image: "https://ext.same-assets.com/1049217180/109667065.svg+xml",
      rating: 5
    },
    {
      name: "Sarah Thompson",
      text: "Ive tried many tools, but Bankify stands out for its seamless interface",
      image: "https://ext.same-assets.com/1049217180/109667065.svg+xml",
      rating: 5
    },
    {
      name: "David Lee",
      text: "Bankify is a must-have for anyone serious about managing their finances. Its both powerful and user-friendly.",
      image: "https://ext.same-assets.com/1049217180/109667065.svg+xml",
      rating: 5
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Hear directly from our satisfied clients and users
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedStaggered
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.08}
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{testimonial.text}</p>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Image
                      key={i}
                      src="https://ext.same-assets.com/4179565558/3744079336.svg+xml"
                      alt="Star"
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedStaggered>
      </div>
    </section>
  );
}
