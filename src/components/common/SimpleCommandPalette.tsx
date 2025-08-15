"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    BookOpen,
    Brain,
    Home,
    MessageSquare,
    Search,
    Settings,
    Sparkles,
    X
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const commands = [
  { name: "Home", href: "/", icon: Home, shortcut: "⌘H" },
  { name: "AI Chat", href: "/chat-with-file", icon: MessageSquare, shortcut: "⌘C" },
  { name: "Browse Syllabus", href: "/select", icon: BookOpen, shortcut: "⌘B" },
  { name: "Mind Map", href: "/mindMap", icon: Brain, shortcut: "⌘M" },
  { name: "Search", href: "/search", icon: Search, shortcut: "⌘/" },
  { name: "AI Tools", href: "/ai-tools", icon: Sparkles, shortcut: "⌘T" },
  { name: "Settings", href: "/settings", icon: Settings, shortcut: "⌘," },
];

export function SimpleCommandPalette() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!mounted) {
    return null;
  }

  const filteredCommands = commands.filter(command =>
    command.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const runCommand = (href: string) => {
    setOpen(false);
    setSearchTerm("");
    router.push(href);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0 shadow-lg max-w-2xl">
        <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-background text-foreground">
          {/* Header */}
          <div className="flex items-center border-b px-4 py-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              placeholder="Type a command or search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
              autoFocus
            />
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 ml-2"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Commands */}
          <div className="max-h-[300px] overflow-y-auto p-2">
            {filteredCommands.length === 0 ? (
              <div className="py-6 text-center text-sm text-muted-foreground">
                No results found.
              </div>
            ) : (
              <div className="space-y-1">
                {filteredCommands.map((command) => (
                  <div
                    key={command.name}
                    onClick={() => runCommand(command.href)}
                    className="flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <command.icon className="h-4 w-4" />
                      <span className="text-sm">{command.name}</span>
                    </div>
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                      {command.shortcut}
                    </kbd>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t px-4 py-2 text-xs text-muted-foreground">
            Press <kbd className="bg-muted px-1 rounded">⌘K</kbd> to toggle
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}