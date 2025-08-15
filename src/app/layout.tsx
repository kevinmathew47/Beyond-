import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { QueryProvider } from "@/lib/rQuery";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Beyond Syllabus",
  description: "AI-powered learning companion for university curriculum",
  keywords: ["education", "AI", "syllabus", "learning", "university"],
  authors: [{ name: "Purple Movement" }],
  creator: "Purple Movement",
  openGraph: {
    title: "Beyond Syllabus",
    description: "AI-powered learning companion for university curriculum",
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <div className="min-h-screen bg-background text-foreground">
              {children}
            </div>
            <CommandPalette />
          </QueryProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
