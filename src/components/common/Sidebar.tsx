"use client";

import { cn } from "@/lib/utils";
import {
    BookOpen,
    Brain,
    ChevronLeft,
    ChevronRight,
    FileText,
    Home,
    MessageSquare,
    Search,
    Settings,
    Sparkles
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "AI Chat", href: "/chat-with-file", icon: MessageSquare },
  { name: "Browse Syllabus", href: "/select", icon: BookOpen },
  { name: "Mind Map", href: "/mindMap", icon: Brain },
];

const tools = [
  { name: "Search", href: "/search", icon: Search },
  { name: "Documents", href: "/docs", icon: FileText },
  { name: "AI Tools", href: "/ai-tools", icon: Sparkles },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className={cn(
      "flex flex-col bg-background border-r border-border transition-all duration-300",
      collapsed ? "w-12" : "w-64",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
              <BookOpen className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-sm">Beyond Syllabus</span>
          </div>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-2 space-y-1">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-2 py-1.5 text-sm rounded-md transition-colors",
                  "hover:bg-muted hover:text-foreground",
                  isActive 
                    ? "bg-muted text-foreground font-medium" 
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </div>

        {!collapsed && (
          <>
            <div className="pt-4 pb-2">
              <div className="px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Tools
              </div>
            </div>
            
            <div className="space-y-1">
              {tools.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-2 py-1.5 text-sm rounded-md transition-colors",
                      "hover:bg-muted hover:text-foreground",
                      isActive 
                        ? "bg-muted text-foreground font-medium" 
                        : "text-muted-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="p-2 border-t border-border">
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-3 px-2 py-1.5 text-sm rounded-md transition-colors",
            "hover:bg-muted hover:text-foreground text-muted-foreground"
          )}
        >
          <Settings className="h-4 w-4 flex-shrink-0" />
          {!collapsed && <span>Settings</span>}
        </Link>
      </div>
    </div>
  );
}