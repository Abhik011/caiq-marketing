import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CA-IQ | AI Operating System for CA Firms",
  description:
    "Audit Management, Compliance Tracking, Client Collaboration, Workflow Automation and AI Intelligence for modern Chartered Accountant firms.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "CA-IQ",
    description:
      "The AI Operating System for Chartered Accountant Firms.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CA-IQ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CA-IQ",
    description:
      "The AI Operating System for Chartered Accountant Firms.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        scroll-smooth
      `}
    >
      <body
        className="
          min-h-screen
          bg-white
          text-zinc-900
          antialiased
          overflow-x-hidden
          font-sans
        "
      >
        {children}
         <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}