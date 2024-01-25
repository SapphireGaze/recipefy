import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipefy",
  description: "Find your next recipe!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="from-accent to-foreground flex min-h-screen flex-col items-center justify-between bg-gradient-to-tr p-24 font-mono">
          {children}
        </main>
      </body>
    </html>
  );
}
