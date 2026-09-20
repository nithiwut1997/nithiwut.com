import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fafaf8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nithiwut.com"),
  title: {
    default: "Nithiwut Wilainuch | Senior Software Engineer",
    template: "%s | Nithiwut Wilainuch",
  },
  description:
    "Nithiwut Wilainuch, Senior Software Engineer. Backend-focused engineering across banking and startup environments, from application code and data to production operations.",
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
          className="sr-only z-50 rounded-sm border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <div className="min-h-screen bg-background text-foreground">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
