"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AnimatedSection,
  AnimatedFadeIn,
  AnimatedStaggered
} from "@/components/ui/animated-section";
import {
  Linkedin,
  Twitter,
  Mail,
  Search,
  Filter
} from "lucide-react";

type Department = "All" | "Leadership" | "Engineering" | "Design" | "Marketing" | "Finance";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  department: Exclude<Department, "All">;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
};

export function TeamClient() {
  // Team members data
  const teamMembers = useMemo<TeamMember[]>(() => [
    {
      id: 1,
      name: "Jennifer Wilson",
      role: "Chief Executive Officer",
      department: "Leadership",
      bio: "Jennifer has over 15 years of experience in fintech and banking. She leads Bankify with a focus on innovation and customer-centered financial solutions.",
      image: "https://ext.same-assets.com/3011590329/555562144.jpeg",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "jennifer@bankify.com"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      department: "Leadership",
      bio: "With a background in software architecture and fintech, Michael leads our engineering team to build secure, scalable financial technologies.",
      image: "https://ext.same-assets.com/1995093389/3764835629.webp",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "michael@bankify.com"
      }
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Chief Financial Officer",
      department: "Finance",
      bio: "Sarah brings extensive experience in financial management and strategic planning, ensuring Bankify's financial health and sustainable growth.",
      image: "https://ext.same-assets.com/3380048486/2580358642.jpeg",
      social: {
        linkedin: "https://linkedin.com",
        email: "sarah@bankify.com"
      }
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Head of Product Design",
      department: "Design",
      bio: "David leads our design team with a passion for creating intuitive, accessible financial interfaces that make banking a pleasure for our users.",
      image: "https://ext.same-assets.com/2439845659/1912158914.jpeg",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "david@bankify.com"
      }
    },
    {
      id: 5,
      name: "Emily Torres",
      role: "Senior Software Engineer",
      department: "Engineering",
      bio: "Emily specializes in backend development and security protocols, ensuring that Bankify's platform is both powerful and secure for all users.",
      image: "https://ext.same-assets.com/2629363183/1347177243.jpeg",
      social: {
        linkedin: "https://linkedin.com",
        email: "emily@bankify.com"
      }
    },
    {
      id: 6,
      name: "Jason Clark",
      role: "Marketing Director",
      department: "Marketing",
      bio: "Jason drives Bankify's marketing strategy with a data-driven approach, focusing on customer acquisition and brand awareness in the fintech space.",
      image: "https://ext.same-assets.com/2416297800/2121704835.jpeg",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "jason@bankify.com"
      }
    },
    {
      id: 7,
      name: "Sophia Kim",
      role: "UX Researcher",
      department: "Design",
      bio: "Sophia brings user-centered design principles to all Bankify products, ensuring that our financial tools meet real user needs through extensive research.",
      image: "https://ext.same-assets.com/2825384018/2272992217.jpeg",
      social: {
        linkedin: "https://linkedin.com",
        email: "sophia@bankify.com"
      }
    },
    {
      id: 8,
      name: "James Wilson",
      role: "Frontend Developer",
      department: "Engineering",
      bio: "James creates seamless, responsive user interfaces for Bankify's web and mobile applications, with a focus on performance and accessibility.",
      image: "https://ext.same-assets.com/3773693539/3064845539.jpeg",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "james@bankify.com"
      }
    },
    {
      id: 9,
      name: "Olivia Martinez",
      role: "Financial Analyst",
      department: "Finance",
      bio: "Olivia supports Bankify's financial planning and analysis, providing insights that drive strategic decisions and sustainable business growth.",
      image: "https://ext.same-assets.com/2812051217/399784675.jpeg",
      social: {
        linkedin: "https://linkedin.com",
        email: "olivia@bankify.com"
      }
    }
  ], []);

  // Departments for filtering
  const departments: Department[] = ["All", "Leadership", "Engineering", "Design", "Marketing", "Finance"];

  // State for filtering and search
  const [activeDepartment, setActiveDepartment] = useState<Department>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter team members based on department and search query
  const filteredMembers = useMemo(() => {
    let results = [...teamMembers];

    // Filter by department
    if (activeDepartment !== "All") {
      results = results.filter(member => member.department === activeDepartment);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      results = results.filter(member =>
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.department.toLowerCase().includes(query) ||
        member.bio.toLowerCase().includes(query)
      );
    }

    return results;
  }, [teamMembers, activeDepartment, searchQuery]);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm text-muted-foreground mb-2 block">Our Team</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-4">
                Meet the people behind Bankify
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our diverse team of experts is passionate about transforming financial management for everyone.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedFadeIn delay={0.3}>
            <div className="rounded-2xl overflow-hidden mb-12">
              <Image
                src="https://ext.same-assets.com/3410035014/2512298704.webp"
                alt="Bankify Team"
                width={1200}
                height={500}
                className="w-full object-cover h-[300px] md:h-[400px]"
              />
            </div>
          </AnimatedFadeIn>
        </div>
      </section>

      {/* Team Content Section */}
      <section className="py-8 lg:py-16">
        <div className="container">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Department Filters */}
              <div className="flex flex-wrap gap-3">
                {departments.map((department) => (
                  <Button
                    key={department}
                    variant={activeDepartment === department ? "default" : "outline"}
                    className="rounded-full"
                    onClick={() => setActiveDepartment(department)}
                  >
                    {department}
                  </Button>
                ))}
              </div>

              {/* Search Box */}
              <div className="w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search team members..."
                    className="w-full md:w-[300px] p-3 pl-10 border rounded-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Results info */}
            {(searchQuery || activeDepartment !== "All") && (
              <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredMembers.length} {filteredMembers.length === 1 ? 'team member' : 'team members'}
                  {searchQuery && <span> for "{searchQuery}"</span>}
                  {activeDepartment !== "All" && <span> in {activeDepartment}</span>}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveDepartment("All");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {filteredMembers.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No team members found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search query or department filter
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setActiveDepartment("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <AnimatedStaggered className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {filteredMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden border shadow-md">
                  <CardContent className="p-0">
                    <div className="relative h-80">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs py-1 px-2 rounded">
                        {member.department}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-xl mb-1">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {member.role}
                      </p>
                      <p className="text-sm mb-4">
                        {member.bio}
                      </p>

                      {/* Social Icons */}
                      <div className="flex gap-3">
                        {member.social.linkedin && (
                          <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <div className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                              <Linkedin className="h-4 w-4" />
                            </div>
                          </Link>
                        )}
                        {member.social.twitter && (
                          <Link href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                            <div className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                              <Twitter className="h-4 w-4" />
                            </div>
                          </Link>
                        )}
                        {member.social.email && (
                          <Link href={`mailto:${member.social.email}`}>
                            <div className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                              <Mail className="h-4 w-4" />
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </AnimatedStaggered>
          )}
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join our growing team
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for talented people to join our mission of transforming financial management. Check out our open positions.
              </p>
              <Link href="/careers">
                <Button className="custom-button px-6 py-2">
                  View Open Positions
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
