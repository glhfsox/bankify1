"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-16 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="https://ext.same-assets.com/2467056450/1798686321.png"
                alt="Bankify Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="font-bold text-xl">Bankify</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Elevate your digital presence with intuitive functionality and seamless design.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook">
                <Image
                  src="https://ext.same-assets.com/3035113461/115884213.svg+xml"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Image
                  src="https://ext.same-assets.com/1330954442/1839032721.svg+xml"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Main Pages</h3>
                <div className="space-y-3">
                  <Link href="/" className="block text-muted-foreground hover:text-primary text-sm">
                    Home
                  </Link>
                  <Link href="/about" className="block text-muted-foreground hover:text-primary text-sm">
                    About
                  </Link>
                  <Link href="/contact" className="block text-muted-foreground hover:text-primary text-sm">
                    Contact
                  </Link>
                  <Link href="/features" className="block text-muted-foreground hover:text-primary text-sm">
                    Features
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Other Pages</h3>
                <div className="space-y-3">
                  <Link href="/careers" className="block text-muted-foreground hover:text-primary text-sm">
                    Careers
                  </Link>
                  <Link href="/blogs" className="block text-muted-foreground hover:text-primary text-sm">
                    Blogs
                  </Link>
                  <Link href="/integration" className="block text-muted-foreground hover:text-primary text-sm">
                    Integrations
                  </Link>
                  <Link href="/team" className="block text-muted-foreground hover:text-primary text-sm">
                    Team
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Get Started</h3>
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="https://ext.same-assets.com/3523038879/39624878.svg+xml"
                        alt="Star"
                        width={16}
                        height={16}
                      />
                      <Image
                        src="https://ext.same-assets.com/3523038879/39624878.svg+xml"
                        alt="Star"
                        width={16}
                        height={16}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">14,3800 Reviews</p>
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-black text-white p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="h-4 w-4" />
                      <h4 className="text-sm font-medium">Custom Domain</h4>
                    </div>
                    <p className="text-xs text-gray-300 mb-3">
                      Visit our site on your own custom domain.
                    </p>
                    <Link href="https://vercel.com/docs/custom-domains" target="_blank">
                      <Button size="sm" variant="secondary" className="w-full bg-white text-black hover:bg-gray-200">
                        Set Up Domain
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Bankify. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
