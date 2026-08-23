import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
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
  metadataBase: new URL("https://nithiwut.com"),
  title: {
    default: "Nithiwut Wilainuch | Senior Software Engineer",
    template: "%s | Nithiwut Wilainuch",
  },
  description:
    "Backend engineering portfolio for Nithiwut Wilainuch, a Senior Software Engineer specializing in Java, Spring Boot, AWS, cloud-native systems, and production reliability.",
  applicationName: "nithiwut.com",
  authors: [{ name: "Nithiwut Wilainuch" }],
  keywords: [
    "Nithiwut Wilainuch",
    "Backend Engineer",
    "Senior Software Engineer",
    "Java Engineer",
    "Spring Boot",
    "RESTful APIs",
    "Cloud Architecture",
    "Platform Engineering",
    "AWS",
    "Kubernetes",
    "Event-Driven Architecture",
  ],
  openGraph: {
    title: "Nithiwut Wilainuch | Senior Software Engineer",
    description:
      "Backend-focused engineering portfolio covering Java, Spring Boot, AWS, cloud-native systems, and production reliability.",
    url: "https://nithiwut.com",
    siteName: "nithiwut.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithiwut Wilainuch | Senior Software Engineer",
    description:
      "Backend-focused engineering portfolio covering Java, Spring Boot, AWS, cloud-native systems, and production reliability.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-foreground px-4 py-3 text-sm font-medium text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <div className="site-bg min-h-screen">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
