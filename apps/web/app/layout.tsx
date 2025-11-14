import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ToastContainer } from "@/components/common";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robert Nicolae Floria | Full-Stack Developer",
  description: "Full-Stack Software Developer specializing in React, Next.js, NestJS, and .NET. Building modern, scalable web applications.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "NestJS", "TypeScript", "Software Engineer"],
  authors: [{ name: "Robert Nicolae Floria" }],
  openGraph: {
    title: "Robert Nicolae Floria | Full-Stack Developer",
    description: "Full-Stack Software Developer specializing in modern web technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <ToastContainer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
