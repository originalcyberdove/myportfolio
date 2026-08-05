import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "Oluwatomilola Arogundade ✷ Cybersecurity Portfolio",
    template: "%s - Oluwatomilola Arogundade",
  },
  description:
    "Cybersecurity professional with hands-on experience across offensive security, SOC operations, vulnerability assessment, and security education.",
  keywords: [
    "Oluwatomilola Arogundade",
    "Cybersecurity Specialist",
    "SOC Operations",
    "Vulnerability Assessment",
    "Web Application Security",
    "Incident Response",
    "Threat Detection",
    "Penetration Testing",
    "Red Team",
  ],
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-touch-icon.png",
  },
  applicationName: "Oluwatomilola Arogundade Portfolio",
  authors: [
    {
      name: "Oluwatomilola Arogundade",
    },
  ],
  generator: "Next.js",
  referrer: "origin",
  creator: "Oluwatomilola Arogundade",
  publisher: "Oluwatomilola Arogundade",
  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Oluwatomilola Arogundade - Cybersecurity Professional",
    description:
      "Cybersecurity professional with hands-on experience across offensive security, SOC operations, vulnerability assessment, and security education.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oluwatomilola Arogundade Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Oluwatomilola Arogundade - Cybersecurity Portfolio",
    description:
      "Cybersecurity professional specializing in SOC operations, vulnerability assessment, and web app security.",
    images: ["/twitter-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

