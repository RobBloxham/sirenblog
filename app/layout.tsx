import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/navbar";
import Foreword from "@/app/components/foreword";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team Siren Blog & Diss home",
  description: "A blog built with the memeist of intentions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar/>
          <main className="max-w-5xl mx-auto px-4 py-5">{children}</main>
        </ThemeProvider>
        </body>
    </html>
  );
}
