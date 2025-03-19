"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Jason Clark",
      position: "Marketing Director",
      image: "https://ext.same-assets.com/3777654603/212563925.jpeg",
      path: "/team/jason-clark"
    },
    {
      name: "Emily Hayes",
      position: "Chief Risk Officer",
      image: "https://ext.same-assets.com/3011615458/1181262372.jpeg",
      path: "/team/emily-hayes"
    },
    {
      name: "Thomas Evans",
      position: "Head of Product Development",
      image: "https://ext.same-assets.com/42283417/2715309103.png",
      path: "/team/thomas-evans"
    }
  ];

  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase mb-2 block">Team Members</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the passionate team behind Bankify's success
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Link key={index} href={member.path} className="group">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="object-cover w-full h-[300px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.position}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/team">
            <Button className="px-8 py-6" variant="outline">
              View All Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
