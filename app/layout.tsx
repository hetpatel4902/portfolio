import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Het Patel — Software Engineer | Systems × Data × AI",
  description:
    "Software engineer working at the intersection of backend engineering, system architecture, data processing, cloud infrastructure, and AI/GenAI.",
  keywords: [
    "Het Patel",
    "Software Engineer",
    "Backend Engineer",
    "System Architecture",
    "Data Processing",
    "AI / GenAI",
  ],
  openGraph: {
    title: "Het Patel — Software Engineer | Systems × Data × AI",
    description:
      "Engineering portfolio for Het Patel focused on backend systems, data, AI, and performance-oriented software design.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[#070b10] text-zinc-100">{children}</body>
    </html>
  );
}
