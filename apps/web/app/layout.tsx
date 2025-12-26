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
  title: "Bilguun Ganzurkh | Software Engineer",
  description: "Software engineer building maintainable systems with clear data flow. Focused on TypeScript, React, and Next.js.",
  openGraph: {
    title: "Bilguun Ganzurkh | Software Engineer",
    description: "Building maintainable systems with clear data flow and real constraints.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilguun Ganzurkh | Software Engineer",
    description: "Building maintainable systems with clear data flow and real constraints.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
