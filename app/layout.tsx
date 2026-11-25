import type { Metadata, Viewport } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var theme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";try{var saved=window.localStorage.getItem("portfolio-theme");if(saved==="light"||saved==="dark")theme=saved;}catch(error){console.warn("Unable to read the saved theme preference.",error);}document.documentElement.dataset.theme=theme;})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#111210" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  title: "Oluwatomilola Arogundade | Cyberdove — Cybersecurity Professional",
  description:
    "Portfolio of Oluwatomilola Arogundade (Cyberdove), a cybersecurity professional working across security operations, application security, research, and security education.",
  keywords: [
    "Oluwatomilola Arogundade",
    "Cyberdove",
    "Cybersecurity Professional",
    "Security Operations",
    "SOC Specialist",
    "Vulnerability Assessment",
    "Application Security",
    "Penetration Testing",
    "Wazuh",
    "Burp Suite",
    "Threat Detection",
    "FraudLock NG",
    "LLM Security",
  ],
  authors: [{ name: "Oluwatomilola Arogundade (Cyberdove)" }],
  creator: "Oluwatomilola Arogundade",
  publisher: "Cyberdove",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Oluwatomilola Arogundade | Cyberdove — Cybersecurity Professional",
    description:
      "Security operations, application security, research, and security education.",
    siteName: "Cyberdove Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oluwatomilola Arogundade | Cyberdove — Cybersecurity Professional",
    description:
      "Cybersecurity professional specializing in SOC operations, application security, threat detection, and AI security.",
  },
};
