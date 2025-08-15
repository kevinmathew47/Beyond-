"use client";

import {
    BookOpen,
    Brain,
    Calculator,
    Calendar,
    Home,
    MessageSquare,
    Search,
    Settings,
    Sparkles,
    User
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const commands = [
  {
    group: "Navigation",
    items: [
      { name: "Home", href: "/", icon: Home, shortcut: "⌘H" },
      { name: "AI Chat", href: "/chat-with-file", icon: MessageSquare, shortcut: "⌘C" },
      { name: "Browse Syllabus", href: "/select", icon: BookOpen, shortcut: "⌘B" },
      { name: "Mind Map", href: "/mindMap", icon: Brain, shortcut: "⌘M" },
    ]
  },
  {
    group: "Tools",
    items: [
      { name: "Search", href: "/search", icon: Search, shortcut: "⌘/" },
      { name: "AI Tools", href: "/ai-tools", icon: Sparkles, shortcut: "⌘T" },
      { name: "Calculator", href: "/calculator", icon: Calculator, shortcut: "⌘=" },
      { name: "Calendar", href: "/calendar", icon: Calendar, shortcut: "⌘D" },
    ]
  },
  {
    group: "Settings",
    items: [
      { name: "Preferences", href: "/settings", icon: Settings, shortcut: "⌘," },
      { name: "Profile", href: "/profile", icon: User, shortcut: "⌘P" },
    ]
  }
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
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

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0 shadow-lg max-w-2xl">
        <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              placeholder="Type a command or search..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-0 focus-visible:ring-0"
            />
          </div>
          <div className="max-h-[300px] overflow-y-auto overflow-x-hidden p-1">
            {commands.map((group, groupIndex) => (
              <div key={group.group}>
                <div className="overflow-hidden p-1 text-foreground">
                  <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                    {group.group}
                  </div>
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      onClick={() => runCommand(() => router.push(item.href))}
                      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </div>
                      {item.shortcut && (
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                          {item.shortcut}
                        </kbd>
                      )}
                    </div>
                  ))}
                </div>
                {groupIndex < commands.length - 1 && (
                  <div className="-mx-1 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}