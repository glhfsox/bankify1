"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AnimatedSection,
  AnimatedFadeIn,
  AnimatedStaggered
} from "@/components/ui/animated-section";
import { Search } from "lucide-react";

// Define the blog post type
type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
};

export function BlogsClient() {
  // Full list of blog posts - using useMemo to avoid recreating on each render
  const allBlogPosts = useMemo(() => [
    {
      id: "the-importance-of-financial-planning-and-how-to-create",
      title: "The importance of financial planning and how to create",
      excerpt: "Financial planning is the foundation of a secure future. Learn how to create a comprehensive plan that works for your unique needs and goals.",
      date: "Dec 19, 2024",
      category: "Article",
      image: "https://ext.same-assets.com/4055983753/618516934.png"
    },
    {
      id: "the-basics-of-investing-and-why-its-important-for-you",
      title: "The basics of investing and why it's important for you",
      excerpt: "Investing might seem intimidating, but understanding the basics can help you build wealth over time. Discover why investing matters for your financial future.",
      date: "Dec 13, 2024",
      category: "News",
      image: "https://ext.same-assets.com/3996503135/2149845507.png"
    },
    {
      id: "the-power-of-budgeting-and-how-to-make-it",
      title: "The power of budgeting and how to make it",
      excerpt: "A well-crafted budget is your roadmap to financial success. Learn practical strategies for creating and sticking to a budget that aligns with your financial goals.",
      date: "Dec 13, 2024",
      category: "News",
      image: "https://ext.same-assets.com/2564977636/2038987988.jpeg"
    },
    {
      id: "understanding-credit-scores-and-their-impact",
      title: "Understanding credit scores and their impact",
      excerpt: "Your credit score plays a crucial role in your financial life. Explore how credit scores work and strategies to improve and maintain a healthy score.",
      date: "Dec 5, 2024",
      category: "Guide",
      image: "https://ext.same-assets.com/1820291743/3937363529.jpeg"
    },
    {
      id: "saving-for-retirement-strategies-for-every-age",
      title: "Saving for retirement: strategies for every age",
      excerpt: "It's never too early or too late to start saving for retirement. Discover age-appropriate strategies that can help you build a comfortable nest egg.",
      date: "Nov 28, 2024",
      category: "Article",
      image: "https://ext.same-assets.com/825307132/2068771299.jpeg"
    },
    {
      id: "managing-debt-effectively-in-todays-economy",
      title: "Managing debt effectively in today's economy",
      excerpt: "Debt doesn't have to be a burden. Learn how to manage and reduce debt while building a stronger financial foundation in the current economic climate.",
      date: "Nov 21, 2024",
      category: "Guide",
      image: "https://ext.same-assets.com/491689659/966749156.jpeg"
    }
  ], []);

  // Categories data - also using useMemo
  const categories = useMemo(() => [
    { name: "All", count: 15 },
    { name: "Articles", count: 6 },
    { name: "News", count: 5 },
    { name: "Guides", count: 4 }
  ], []);

  // States for search and filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allBlogPosts);

  // Filter posts based on search query and category
  useEffect(() => {
    let results = [...allBlogPosts];

    // Filter by category
    if (activeCategory !== "All") {
      results = results.filter(post =>
        post.category === activeCategory ||
        // Handle plural category names (e.g., "Guide" vs "Guides")
        post.category === activeCategory.slice(0, -1)
      );
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      results = results.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }

    setFilteredPosts(results);
  }, [searchQuery, activeCategory, allBlogPosts]);

  // Handle category click
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm text-muted-foreground mb-2 block">Our Blog</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-4">
                Expert insights for your financial journey
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the latest news, tips, and strategies to help you achieve financial wellness.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-8 lg:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <AnimatedFadeIn>
                <div className="sticky top-24">
                  {/* Search Box */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Search</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full p-3 pl-10 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                          onClick={() => handleCategoryClick(category.name)}
                        >
                          <button
                            className={`text-left transition-colors ${
                              activeCategory === category.name
                                ? "text-primary font-medium"
                                : "text-muted-foreground hover:text-primary"
                            }`}
                          >
                            {category.name}
                          </button>
                          <span className="text-sm text-muted-foreground">({category.count})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-4">
                        Stay updated with our latest articles and financial tips.
                      </p>
                      <div className="space-y-4">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="w-full p-2 border rounded-md"
                        />
                        <Button className="custom-button w-full">
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedFadeIn>
            </div>

            {/* Main Blog Content */}
            <div className="lg:col-span-9">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No matching articles found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search query or category selection
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <>
                  {/* Results info */}
                  {(searchQuery || activeCategory !== "All") && (
                    <div className="mb-6 flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">
                        Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'}
                        {searchQuery && <span> for "{searchQuery}"</span>}
                        {activeCategory !== "All" && <span> in {activeCategory}</span>}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSearchQuery("");
                          setActiveCategory("All");
                        }}
                      >
                        Clear Filters
                      </Button>
                    </div>
                  )}

                  <AnimatedStaggered className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                    {filteredPosts.map((post, index) => (
                      <Card key={index} className="overflow-hidden border shadow-sm">
                        <CardContent className="p-0">
                          <div className="relative h-48">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-primary text-white text-xs py-1 px-2 rounded">
                              {post.category}
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="text-xs text-muted-foreground mb-2">
                              {post.date}
                            </div>
                            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            <Link href={`/blogs/${post.id}`}>
                              <Button variant="outline" size="sm">
                                Read More
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </AnimatedStaggered>

                  {filteredPosts.length >= 6 && (
                    <AnimatedFadeIn delay={0.5} className="mt-12 flex justify-center">
                      <Button variant="outline" className="px-6 py-2">
                        Load More Articles
                      </Button>
                    </AnimatedFadeIn>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to take control of your finances?
              </h2>
              <p className="text-muted-foreground mb-8">
                Start your journey to financial wellness with Bankify today.
              </p>
              <Link href="/contact">
                <Button className="custom-button px-6 py-2">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
