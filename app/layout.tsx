import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prajan Sanjay K — Cybersecurity & Full-Stack AI Engineer",
  description:
    "Engineering portfolio of Prajan Sanjay K: B.E. CSE (Cyber Security) student building secure, intelligent, and scalable systems across AI, cybersecurity, full-stack engineering, and cloud infrastructure. Top 8 Finalist HAL Aerothon.",
  keywords: [
    "Prajan Sanjay K",
    "Cybersecurity Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Cloud DevOps",
    "HAL Aerothon",
    "Digital Twin",
    "AWS",
    "Portfolio",
    "Chennai Institute of Technology",
  ],
  authors: [{ name: "Prajan Sanjay K" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Prajan Sanjay K — Cybersecurity & Full-Stack AI Engineer",
    description:
      "Building secure, intelligent, and scalable systems across AI, cybersecurity, full-stack engineering, and cloud infrastructure.",
    siteName: "Prajan Sanjay K Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajan Sanjay K — Cybersecurity & Full-Stack AI Engineer",
    description:
      "Building secure, intelligent, and scalable systems across AI, cybersecurity, full-stack engineering, and cloud infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
