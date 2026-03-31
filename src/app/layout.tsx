import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumenet - AI Driven Environments",
  description: "Lumenet blends AI, system architecture, and design to build intuitive, perception-driven digital environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
