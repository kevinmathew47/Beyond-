"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left section */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">BS</span>
              </div>
              <span className="font-semibold">Beyond Syllabus</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered learning companion for university curriculum. 
              Built by the Purple Movement.
            </p>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 px-2" asChild>
                <a
                  href="https://github.com/The-Purple-Movement/WikiSyllabus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <Github className="h-3 w-3" />
                  <span className="text-xs">GitHub</span>
                  <ExternalLink className="h-2 w-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right section - Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="font-medium mb-3">Product</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/chat-with-file" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Chat
                </Link>
                <Link href="/select" className="text-muted-foreground hover:text-foreground transition-colors">
                  Browse Syllabus
                </Link>
                <Link href="/mindMap" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mind Maps
                </Link>
              </nav>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Resources</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  API Reference
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contribute
                </Link>
              </nav>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  License
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Beyond Syllabus. Open source project by Purple Movement.
          </p>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Built with Next.js</span>
            <span>•</span>
            <span>Powered by AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
