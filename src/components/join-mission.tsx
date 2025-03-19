"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function JoinMission() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-sm font-medium text-muted-foreground uppercase mb-2 block">Join Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join our mission to empower financial freedom
            </h2>
            <p className="text-muted-foreground mb-8">
              At Bankify, we're committed to transforming how people manage their finances.
              Join our talented team and contribute to building innovative solutions that
              make financial management accessible to everyone.
            </p>

            <Link href="/careers">
              <Button className="custom-button px-6 py-2">
                Open positions
              </Button>
            </Link>
          </div>

          <div>
            <Image
              src="https://ext.same-assets.com/1361898908/850609408.webp"
              alt="Team working together"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
