import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import DarkModeProvider from "@/components/theme/DarkModeProvider";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swift Contrast",
  description:
    "A lightweight color picker with real-time WCAG contrast analysis for accessible and inclusive design decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <DarkModeProvider>
          <Navbar />
          <main id="main" className="p-2">
            {children}
          </main>
        </DarkModeProvider>
      </body>
    </html>
  );
}
