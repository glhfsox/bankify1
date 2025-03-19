"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AnimatedSection,
  AnimatedFadeIn,
  AnimatedSlideInLeft,
  AnimatedSlideInRight,
  AnimatedStaggered
} from "@/components/ui/animated-section";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export function AboutClient({ teamMembers }: { teamMembers: TeamMember[] }) {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm text-muted-foreground mb-2 block">About us</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-4">
                Achieve your financial goals effortlessly with Bankify
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Begin your path to smarter money management with Bankify, designed for effortless tracking and planning.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedFadeIn delay={0.3}>
            <div className="rounded-2xl overflow-hidden mb-20">
              <Image
                src="https://ext.same-assets.com/3410035014/2512298704.webp"
                alt="Team working together"
                width={1200}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </AnimatedFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimatedSlideInLeft delay={0.4}>
              <div>
                <div className="bg-muted p-6 rounded-lg mb-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <span className="text-muted-foreground text-sm">Total transaction</span>
                      <div className="text-4xl font-bold">$1M+</div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-muted-foreground text-sm">Users satisfaction</span>
                      <div className="text-4xl font-bold">99%</div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-muted-foreground text-sm">Active users</span>
                      <div className="text-4xl font-bold">750K</div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-muted-foreground text-sm">Saving collected</span>
                      <div className="text-4xl font-bold">$10M</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button className="custom-button px-6 py-2">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </AnimatedSlideInLeft>

            <AnimatedSlideInRight delay={0.4}>
              <div>
                <p className="text-lg mb-6">
                  We believe managing your finances should be simple, secure, and effective. Our platform is designed to provide you with all the tools you need to track your spending, set savings goals, and optimize your financial decisions, all in one place.
                </p>
                <p className="text-lg mb-6">
                  Whether you're an individual looking to streamline your budgeting or a business managing multiple accounts.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <Image
                    src="https://ext.same-assets.com/127818082/1983408516.jpeg"
                    alt="People working on finances"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <Image
                    src="https://ext.same-assets.com/2094838824/1234650819.jpeg"
                    alt="Financial planning"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </AnimatedSlideInRight>
          </div>
        </div>
      </section>

      {/* Vision & Goals Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedSlideInLeft>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Shaping the future of personal finance
                </h2>
                <p className="text-muted-foreground">
                  Our mission is to revolutionize how people manage their finances, making it accessible,
                  intuitive, and empowering for everyone.
                </p>
              </div>
            </AnimatedSlideInLeft>

            <div className="md:col-span-2">
              <AnimatedStaggered className="space-y-8" staggerDelay={0.2}>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-2 rounded-full h-fit">
                    <div className="bg-primary rounded-full w-4 h-4"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Financial Independence</h3>
                    <p className="text-muted-foreground">
                      Our vision is to help individuals achieve financial freedom by providing tools that simplify money management, track spending
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-2 rounded-full h-fit">
                    <div className="bg-primary rounded-full w-4 h-4"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Financial Clarity</h3>
                    <p className="text-muted-foreground">
                      Bankify aims to bring clarity to personal finances by offering intuitive solutions that enable users to better understand and control their financial situation
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-2 rounded-full h-fit">
                    <div className="bg-primary rounded-full w-4 h-4"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enable Smarter Choices</h3>
                    <p className="text-muted-foreground">
                      Our goal is to make financial management accessible and efficient for everyone, helping users set and reach their financial goals with ease and confidence.
                    </p>
                  </div>
                </div>
              </AnimatedStaggered>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSlideInLeft>
              <div>
                <Image
                  src="https://ext.same-assets.com/3356791623/1902773863.webp"
                  alt="Partnership"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </AnimatedSlideInLeft>

            <AnimatedSlideInRight>
              <div>
                <span className="text-sm text-muted-foreground uppercase mb-2 block">Partnerships</span>
                <h2 className="text-3xl font-bold mb-6">
                  Partnership opportunities with bankify
                </h2>
                <p className="text-muted-foreground mb-8">
                  Join us in revolutionizing financial management. We offer valuable partnership to drive mutual growth.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="https://ext.same-assets.com/663829287/3199080412.svg+xml"
                      alt="Checkmark"
                      width={20}
                      height={20}
                    />
                    <span>Expand your reach with a trusted platform</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Image
                      src="https://ext.same-assets.com/663829287/3199080412.svg+xml"
                      alt="Checkmark"
                      width={20}
                      height={20}
                    />
                    <span>Offer seamless, enhanced user experiences</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Image
                      src="https://ext.same-assets.com/663829287/3199080412.svg+xml"
                      alt="Checkmark"
                      width={20}
                      height={20}
                    />
                    <span>Collaborate for growth and innovation</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Image
                      src="https://ext.same-assets.com/663829287/3199080412.svg+xml"
                      alt="Checkmark"
                      width={20}
                      height={20}
                    />
                    <span>Drive growth through partnerships</span>
                  </div>
                </div>
              </div>
            </AnimatedSlideInRight>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm text-muted-foreground uppercase mb-2 block">Team Members</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet the passionate team behind Bankify's success
              </h2>
              <div className="mt-6">
                <Link href="/team">
                  <Button variant="outline" className="px-6 py-2">
                    View All Team
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedStaggered className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-semibold text-xl mb-1">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </AnimatedStaggered>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join our mission to empower financial freedom
              </h2>
              <div className="mt-6">
                <Link href="/careers">
                  <Button className="custom-button px-6 py-2">
                    Open positions
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedFadeIn delay={0.3}>
            <div className="mt-12">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/3922333995/1000187770.png"
                  alt="Team collaboration"
                  width={1200}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </AnimatedFadeIn>
        </div>
      </section>
    </>
  );
}
