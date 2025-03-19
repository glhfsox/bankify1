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
import { Search, MapPin, Briefcase, Clock, Calendar, ChevronRight } from "lucide-react";

type Department = "All" | "Engineering" | "Design" | "Marketing" | "Finance" | "Operations";
type JobType = "Full-time" | "Part-time" | "Contract" | "Remote";

type JobListing = {
  id: number;
  title: string;
  department: Exclude<Department, "All">;
  location: string;
  type: JobType;
  description: string;
  responsibilities: string[];
  requirements: string[];
  postedDate: string;
};

export function CareersClient() {
  // Job listings data
  const jobListings = useMemo<JobListing[]>(() => [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "We're looking for a Senior Frontend Developer to join our engineering team and help build the future of financial technology.",
      responsibilities: [
        "Develop and maintain responsive web applications using React, Next.js, and TypeScript",
        "Collaborate with designers to implement pixel-perfect UI components",
        "Write clean, maintainable, and efficient code",
        "Perform code reviews and mentor junior developers",
        "Participate in agile development processes"
      ],
      requirements: [
        "5+ years of experience in frontend development",
        "Strong proficiency in React, Next.js, and TypeScript",
        "Experience with modern CSS frameworks and methodologies",
        "Understanding of RESTful APIs and GraphQL",
        "Bachelor's degree in Computer Science or equivalent experience"
      ],
      postedDate: "Dec 10, 2024"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Join our design team to create intuitive and accessible interfaces that help users manage their finances with ease.",
      responsibilities: [
        "Design user-centered interfaces for web and mobile applications",
        "Create wireframes, prototypes, and high-fidelity mockups",
        "Conduct user research and usability testing",
        "Collaborate with product managers and engineers",
        "Maintain and evolve our design system"
      ],
      requirements: [
        "3+ years of experience in UX/UI design",
        "Proficiency in Figma and other design tools",
        "Strong portfolio demonstrating user-centered design process",
        "Experience designing for fintech or similar industries",
        "Excellent communication skills"
      ],
      postedDate: "Dec 5, 2024"
    },
    {
      id: 3,
      title: "Financial Analyst",
      department: "Finance",
      location: "New York, NY",
      type: "Full-time",
      description: "We're seeking a Financial Analyst to support our finance team with financial planning, analysis, and reporting.",
      responsibilities: [
        "Perform financial forecasting, reporting, and operational metrics tracking",
        "Analyze financial data and create regular reports",
        "Support the annual budgeting process",
        "Identify trends and make recommendations for improvements",
        "Assist with financial audits and compliance"
      ],
      requirements: [
        "Bachelor's degree in Finance, Accounting, or related field",
        "2+ years of experience in financial analysis",
        "Proficiency in Excel and financial software",
        "Strong analytical and problem-solving skills",
        "Knowledge of financial regulations and GAAP"
      ],
      postedDate: "Nov 28, 2024"
    },
    {
      id: 4,
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Lead our product marketing efforts to drive awareness, acquisition, and retention for our financial products.",
      responsibilities: [
        "Develop and execute marketing strategies for our products",
        "Create compelling content for different marketing channels",
        "Analyze market trends and competitor activities",
        "Work closely with product and sales teams",
        "Track and measure marketing performance"
      ],
      requirements: [
        "3+ years of experience in product marketing",
        "Experience in fintech or financial services preferred",
        "Strong communication and storytelling skills",
        "Data-driven approach to marketing",
        "Bachelor's degree in Marketing or related field"
      ],
      postedDate: "Nov 20, 2024"
    },
    {
      id: 5,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Boston, MA",
      type: "Full-time",
      description: "Join our backend team to build robust, scalable, and secure systems that power our financial platform.",
      responsibilities: [
        "Design and implement backend services using Node.js",
        "Optimize database queries and data structures",
        "Ensure high performance and availability of services",
        "Implement security best practices and data protection",
        "Collaborate with frontend developers on API design"
      ],
      requirements: [
        "4+ years of experience in backend development",
        "Proficiency in Node.js, Express, and TypeScript",
        "Experience with SQL and NoSQL databases",
        "Knowledge of cloud services (AWS, GCP, or Azure)",
        "Understanding of security and compliance requirements in fintech"
      ],
      postedDate: "Nov 18, 2024"
    },
    {
      id: 6,
      title: "Customer Support Specialist",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Provide exceptional support to our customers, helping them navigate our financial platform and resolve issues.",
      responsibilities: [
        "Respond to customer inquiries via email, chat, and phone",
        "Troubleshoot and resolve customer issues",
        "Document customer feedback and report common issues",
        "Contribute to knowledge base and support documentation",
        "Collaborate with product and engineering teams on customer experience improvements"
      ],
      requirements: [
        "2+ years of experience in customer support",
        "Strong communication and problem-solving skills",
        "Ability to explain technical concepts in simple terms",
        "Experience with support ticketing systems",
        "Patient and empathetic approach to customer service"
      ],
      postedDate: "Nov 15, 2024"
    },
    {
      id: 7,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      description: "Help us build and maintain our infrastructure, ensuring high availability, performance, and security for our financial services.",
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage cloud infrastructure and containerization",
        "Monitor system performance and troubleshoot issues",
        "Implement security best practices and automate security testing",
        "Collaborate with development teams to improve deployment processes"
      ],
      requirements: [
        "3+ years of experience in DevOps or SRE",
        "Proficiency with AWS, Docker, and Kubernetes",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Knowledge of monitoring and logging tools",
        "Strong understanding of security best practices"
      ],
      postedDate: "Nov 10, 2024"
    }
  ], []);

  // Departments for filtering
  const departments: Department[] = ["All", "Engineering", "Design", "Marketing", "Finance", "Operations"];

  // Job types for filtering
  const jobTypes: JobType[] = ["Full-time", "Part-time", "Contract", "Remote"];

  // State for filtering and search
  const [activeDepartment, setActiveDepartment] = useState<Department>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJobTypes, setSelectedJobTypes] = useState<JobType[]>([]);

  // Toggle job type selection
  const toggleJobType = (type: JobType) => {
    if (selectedJobTypes.includes(type)) {
      setSelectedJobTypes(selectedJobTypes.filter(t => t !== type));
    } else {
      setSelectedJobTypes([...selectedJobTypes, type]);
    }
  };

  // Filter jobs based on department, job type, and search query
  const filteredJobs = useMemo(() => {
    let results = [...jobListings];

    // Filter by department
    if (activeDepartment !== "All") {
      results = results.filter(job => job.department === activeDepartment);
    }

    // Filter by job type
    if (selectedJobTypes.length > 0) {
      results = results.filter(job => selectedJobTypes.includes(job.type));
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      results = results.filter(job =>
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query)
      );
    }

    return results;
  }, [jobListings, activeDepartment, selectedJobTypes, searchQuery]);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm text-muted-foreground mb-2 block">Careers</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-4">
                Join our team and shape the future of finance
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Bankify, we're on a mission to transform how people manage their finances. Join us and be part of the revolution.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedFadeIn delay={0.3}>
            <div className="rounded-2xl overflow-hidden mb-16">
              <Image
                src="https://ext.same-assets.com/3922333995/1000187770.png"
                alt="Team collaboration"
                width={1200}
                height={500}
                className="w-full object-cover h-[300px] md:h-[400px]"
              />
            </div>
          </AnimatedFadeIn>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Life at Bankify
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe in fostering a collaborative, inclusive, and innovative environment where everyone can thrive.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedStaggered className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Image
                  src="https://ext.same-assets.com/2729991204/848784391.svg+xml"
                  alt="Innovation"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We're constantly pushing boundaries and exploring new ways to solve financial challenges.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Image
                  src="https://ext.same-assets.com/813064493/3598243772.svg+xml"
                  alt="Collaboration"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe great ideas come from diverse perspectives working together toward a common goal.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Image
                  src="https://ext.same-assets.com/3337358927/2304257784.svg+xml"
                  alt="Growth"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-muted-foreground">
                We invest in our team's personal and professional development, helping everyone reach their full potential.
              </p>
            </div>
          </AnimatedStaggered>

          <AnimatedFadeIn delay={0.4}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Benefits & Perks</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>Competitive salary and equity packages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>Comprehensive health, dental, and vision coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>Unlimited PTO policy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>401(k) matching program</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>Remote and flexible work options</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Development Opportunities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>Learning and development budget</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>Regular internal workshops and knowledge sharing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>Conference attendance opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>Mentorship programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span>Clear career progression paths</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedFadeIn>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Open Positions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find your perfect role at Bankify and join our mission to transform financial management.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            {/* Filters */}
            <div className="lg:col-span-3">
              <AnimatedFadeIn>
                <div className="sticky top-24 space-y-8">
                  {/* Search Box */}
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search positions..."
                        className="w-full p-3 pl-10 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Department Filter */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Departments</h3>
                    <div className="space-y-2">
                      {departments.map((department) => (
                        <div
                          key={department}
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => setActiveDepartment(department)}
                        >
                          <button
                            className={`text-left ${
                              activeDepartment === department
                                ? "text-primary font-medium"
                                : "text-muted-foreground"
                            }`}
                          >
                            {department}
                          </button>
                          {department !== "All" && (
                            <span className="text-sm text-muted-foreground">
                              ({jobListings.filter(job => job.department === department).length})
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Job Type Filter */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Job Type</h3>
                    <div className="space-y-2">
                      {jobTypes.map((type) => (
                        <div
                          key={type}
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => toggleJobType(type)}
                        >
                          <div className={`w-4 h-4 border rounded flex items-center justify-center ${
                            selectedJobTypes.includes(type) ? "bg-primary border-primary" : "border-gray-300"
                          }`}>
                            {selectedJobTypes.includes(type) && (
                              <div className="w-2 h-2 bg-white rounded-sm"></div>
                            )}
                          </div>
                          <span className={selectedJobTypes.includes(type) ? "font-medium" : ""}>
                            {type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {(searchQuery || activeDepartment !== "All" || selectedJobTypes.length > 0) && (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setSearchQuery("");
                        setActiveDepartment("All");
                        setSelectedJobTypes([]);
                      }}
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              </AnimatedFadeIn>
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-9">
              {/* Results info */}
              {(searchQuery || activeDepartment !== "All" || selectedJobTypes.length > 0) && (
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'}
                    {searchQuery && <span> for "{searchQuery}"</span>}
                    {activeDepartment !== "All" && <span> in {activeDepartment}</span>}
                    {selectedJobTypes.length > 0 && (
                      <span> ({selectedJobTypes.join(", ")})</span>
                    )}
                  </p>
                </div>
              )}

              {filteredJobs.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">No positions found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria or check back later for new openings.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveDepartment("All");
                      setSelectedJobTypes([]);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <AnimatedStaggered className="space-y-6" staggerDelay={0.1}>
                  {filteredJobs.map((job) => (
                    <Link
                      key={job.id}
                      href={`/careers/${job.id}`}
                      className="block group"
                    >
                      <Card className="overflow-hidden border group-hover:border-primary group-hover:shadow-md transition-all">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                {job.title}
                              </h3>
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                <div className="flex items-center gap-1">
                                  <Briefcase className="h-4 w-4" />
                                  <span>{job.department}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{job.type}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>Posted: {job.postedDate}</span>
                                </div>
                              </div>
                              <p className="text-muted-foreground mb-4">
                                {job.description}
                              </p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </AnimatedStaggered>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Recruitment Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We've designed a transparent and efficient hiring process to help find the right people to join our team.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedStaggered className="grid grid-cols-1 md:grid-cols-4 gap-8" staggerDelay={0.15}>
            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Application</h3>
              <p className="text-muted-foreground text-sm">
                Submit your application with your resume and a brief introduction about yourself.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Initial Interview</h3>
              <p className="text-muted-foreground text-sm">
                A conversation with our recruitment team to understand your background and aspirations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Technical Assessment</h3>
              <p className="text-muted-foreground text-sm">
                Role-specific evaluation to assess your skills and how you approach challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Final Interview</h3>
              <p className="text-muted-foreground text-sm">
                Meet with the team to discuss your fit and align on mutual expectations.
              </p>
            </div>
          </AnimatedStaggered>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't see a perfect match?
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <Link href="/contact">
                <Button className="custom-button px-6 py-2">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
