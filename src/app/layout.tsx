import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bankify | Powered by Vercel",
  description: "Bankify is a modern banking platform deployed on Vercel, offering responsive design, secure features, and customizable sections to elevate your financial brand online.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bankify-deployment.vercel.app"),
  openGraph: {
    title: "Bankify | Modern Banking Platform",
    description: "A next-generation banking platform deployed on Vercel",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Bankify",
    images: [
      {
        url: "https://ext.same-assets.com/2467056450/1798686321.png",
        width: 1200,
        height: 630,
        alt: "Bankify Banking Platform"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bankify | Modern Banking Platform",
    description: "A next-generation banking platform deployed on Vercel",
    images: ["https://ext.same-assets.com/2467056450/1798686321.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}
