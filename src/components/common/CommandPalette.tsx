"use client";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command";
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
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        {commands.map((group, groupIndex) => (
          <div key={group.group}>
            <CommandGroup heading={group.group}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.name}
                  onSelect={() => runCommand(() => router.push(item.href))}
                  className="flex items-center justify-between"
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
                </CommandItem>
              ))}
            </CommandGroup>
            {groupIndex < commands.length - 1 && <CommandSeparator />}
          </div>
        ))}
      </CommandList>
    </CommandDialog>
  );
}