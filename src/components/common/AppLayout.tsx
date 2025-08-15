"use client";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showFooter?: boolean;
}

export function AppLayout({ 
  children, 
  showSidebar = false, 
  showFooter = true 
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex pt-12">
        {showSidebar && <Sidebar />}
        
        <main className="flex-1 min-h-[calc(100vh-3rem)]">
          {children}
        </main>
      </div>
      
      {showFooter && <Footer />}
      <StatusBar />
    </div>
  );
}