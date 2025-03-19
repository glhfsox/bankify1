"use client";

import Image from "next/image";

export function Partnership() {
  const benefits = [
    "Expand your reach with a trusted platform",
    "Offer seamless, enhanced user experiences",
    "Collaborate for growth and innovation",
    "Drive growth through partnerships"
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="https://ext.same-assets.com/3356791623/1902773863.webp"
              alt="Partnership opportunities"
              width={500}
              height={400}
              className="rounded-xl object-cover w-full h-[400px]"
            />
          </div>

          <div>
            <span className="text-sm font-medium text-muted-foreground uppercase mb-2 block">Partnerships</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partnership opportunities with bankify
            </h2>
            <p className="text-muted-foreground mb-8">
              Join us in revolutionizing financial management. We offer valuable partnership to drive mutual growth.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 mt-0.5 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
