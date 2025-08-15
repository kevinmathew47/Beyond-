"use client";

import {
    ArrowRight,
    BookOpen,
    Brain,
    Keyboard,
    MessageSquare,
    Sparkles,
    Zap
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const recentProjects = [
  { name: "Computer Science Syllabus", path: "/ktu/computer-science", lastAccessed: "2 hours ago" },
  { name: "Mathematics Course", path: "/mgu/mathematics", lastAccessed: "1 day ago" },
  { name: "Physics Curriculum", path: "/calicut/physics", lastAccessed: "3 days ago" },
];

const quickActions = [
  {
    title: "Start AI Chat",
    description: "Get instant help with your syllabus",
    icon: MessageSquare,
    href: "/chat-with-file",
    shortcut: "⌘K",
    color: "text-blue-400"
  },
  {
    title: "Browse Syllabus",
    description: "Explore university courses",
    icon: BookOpen,
    href: "/select",
    shortcut: "⌘B",
    color: "text-green-400"
  },
  {
    title: "Create Mind Map",
    description: "Visualize your learning",
    icon: Brain,
    href: "/mindMap",
    shortcut: "⌘M",
    color: "text-purple-400"
  }
];

const shortcuts = [
  { key: "⌘K", description: "Open command palette" },
  { key: "⌘B", description: "Browse syllabus" },
  { key: "⌘/", description: "Search" },
  { key: "⌘,", description: "Open settings" },
];

export function WelcomeScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to Beyond Syllabus</h1>
          <p className="text-muted-foreground">
            Your AI-powered learning companion for university curriculum
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Quick Actions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {quickActions.map((action) => (
                <Card 
                  key={action.title}
                  className="p-4 hover:bg-muted/50 transition-colors cursor-pointer group"
                  onClick={() => router.push(action.href)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-muted ${action.color}`}>
                      <action.icon className="h-5 w-5" />
                    </div>
                    <kbd className="text-xs bg-muted px-2 py-1 rounded font-mono">
                      {action.shortcut}
                    </kbd>
                  </div>
                  
                  <h3 className="font-medium mb-1 group-hover:text-foreground/80">
                    {action.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {action.description}
                  </p>
                </Card>
              ))}
            </div>

            {/* Recent Projects */}
            <h2 className="text-lg font-semibold mb-4">Recent Projects</h2>
            <div className="space-y-2">
              {recentProjects.map((project) => (
                <Card 
                  key={project.name}
                  className="p-3 hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => router.push(project.path)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-sm">{project.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Last accessed {project.lastAccessed}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Keyboard Shortcuts */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Keyboard className="h-4 w-4" />
                Keyboard Shortcuts
              </h3>
              
              <div className="space-y-2">
                {shortcuts.map((shortcut) => (
                  <div key={shortcut.key} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{shortcut.description}</span>
                    <kbd className="bg-muted px-2 py-1 rounded text-xs font-mono">
                      {shortcut.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tips */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Pro Tips
              </h3>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Use the command palette (⌘K) for quick navigation</p>
                <p>• Ask specific questions to get better AI responses</p>
                <p>• Create mind maps to visualize complex topics</p>
                <p>• Bookmark important syllabus sections</p>
              </div>
            </Card>

            {/* Get Started */}
            <Card className="p-4 bg-blue-500/10 border-blue-500/20">
              <h3 className="font-semibold mb-2 text-blue-400">Get Started</h3>
              <p className="text-sm text-muted-foreground mb-3">
                New to Beyond Syllabus? Start with our AI chat feature.
              </p>
              <Button 
                size="sm" 
                className="w-full"
                onClick={() => router.push("/chat-with-file")}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Start AI Chat
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}