import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zach Johnston",
  description: "Startup operator and ex-VC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Nav />
          <main className="max-w-3xl mx-auto px-6 py-20 relative z-10">
            {children}
          </main>
          <footer className="max-w-3xl mx-auto px-6 py-8 border-t relative z-10" style={{ borderColor: "var(--border)" }}>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              © {new Date().getFullYear()} Zach Johnston
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
