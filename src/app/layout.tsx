import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Behzod | Frontend & Telegram Bot Developer",
    template: "%s | Behzod",
  },
  description:
    "Behzod Abdugafforov — Frontend va Telegram Bot dasturchi. React, Next.js, TypeScript, Python (Aiogram) bo'yicha portfolio va loyihalar.",
  keywords: [
    "Behzod",
    "Dayleess",
    "Frontend Developer",
    "Telegram Bot Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Aiogram",
    "Portfolio",
    "Toshkent",
    "O'zbekiston",
  ],
  authors: [{ name: "Behzod Abdugafforov" }],
  creator: "Behzod Abdugafforov",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: siteUrl,
    siteName: "Behzod Portfolio",
    title: "Behzod | Frontend & Telegram Bot Developer",
    description:
      "Frontend va Telegram Bot dasturchi portfoliosi. React, Next.js, Python loyihalar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Behzod | Frontend & Telegram Bot Developer",
    description:
      "Frontend va Telegram Bot dasturchi portfoliosi. React, Next.js, Python loyihalar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-inter antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <div className="blob top-0 left-[-10%] opacity-50" />
            <div className="blob top-[40%] right-[-10%] opacity-30" style={{ animationDelay: '-5s' }} />
            <div className="blob bottom-0 left-[20%] opacity-20" style={{ animationDelay: '-10s' }} />
            
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
