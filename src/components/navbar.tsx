"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blog" }
  ];

  return (
    <header className="py-4 border-b sticky top-0 z-50 bg-white">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://ext.same-assets.com/2467056450/1798686321.png"
              alt="Bankify Logo"
              width={32}
              height={32}
            />
            <span className="font-bold text-lg">Bankify</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ${
                  pathname === link.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground transition-colors"
                }`}
              >
                {link.label}
              </Link>
            ))}
  
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline" className="px-4 py-2 text-sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="custom-button px-4 py-2 text-sm">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6">
            <nav className="flex flex-col gap-4">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground transition-colors"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/deployment"
                className={`flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-black to-gray-800 text-white rounded-full text-xs w-fit hover:opacity-90 transition-opacity ${
                  pathname === "/deployment" ? "ring-2 ring-primary ring-offset-2" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Zap className="h-3.5 w-3.5" />
                <span>Vercel Deployment</span>
              </Link>
            </nav>

            <div className="flex flex-col gap-3 mt-6">
              <Link href="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-center">
                  Login
                </Button>
              </Link>
              <Link href="/signup" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button className="custom-button w-full justify-center">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
