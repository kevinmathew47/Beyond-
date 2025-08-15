import {
    BookOpen,
    Command,
    Menu,
    MessageSquare,
    Search,
    Settings,
    Sparkles,
    User
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 w-full h-12 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="flex h-full items-center justify-between px-4">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm font-medium hover:text-foreground/80 transition-colors"
          >
            <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
              <BookOpen className="w-3 h-3 text-white" />
            </div>
            Beyond Syllabus
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-8 px-3 text-xs">
              <MessageSquare className="w-3 h-3 mr-1" />
              Chat
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-3 text-xs">
              <Sparkles className="w-3 h-3 mr-1" />
              AI Tools
            </Button>
          </nav>
        </div>

        {/* Center - Search */}
        <div className="hidden md:flex items-center max-w-md w-full mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-muted-foreground" />
            <Input
              placeholder="Search syllabus, subjects..."
              className="h-8 pl-9 pr-4 text-xs bg-muted/50 border-border focus-ring"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <Command className="h-2 w-2" />K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 md:hidden">
            <Search className="w-3 h-3" />
          </Button>
          
          <ThemeToggle />
          
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Settings className="w-3 h-3" />
          </Button>
          
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <User className="w-3 h-3" />
          </Button>
          
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 md:hidden">
            <Menu className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </header>
  );
}
