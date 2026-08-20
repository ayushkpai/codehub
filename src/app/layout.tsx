import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "CodeHub",
  description: "Create and manage your repositories",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="bg-header-bg text-white px-4">
          <div className="max-w-[1280px] mx-auto h-16 flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </Link>

            <div className="flex-1 max-w-[272px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type / to search"
                  className="w-full bg-input-bg border border-border rounded-md px-3 py-[5px] text-sm text-foreground placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>

            <nav className="flex items-center gap-4 text-sm font-medium">
              <Link href="/new" className="hover:text-[#c9d1d9] text-white/70">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                  <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z" />
                </svg>
              </Link>
            </nav>

            <div className="ml-auto flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#6e7681] flex items-center justify-center text-xs font-medium">
                U
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
