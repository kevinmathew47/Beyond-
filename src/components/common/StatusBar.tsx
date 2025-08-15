"use client";

import {
    AlertCircle,
    CheckCircle,
    Clock,
    GitBranch,
    Loader2,
    Wifi,
    WifiOff
} from "lucide-react";
import { useEffect, useState } from "react";

export function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(timer);
    };
  }, []);

  const getStatusIcon = () => {
    switch (status) {
      case 'loading':
        return <Loader2 className="h-3 w-3 animate-spin" />;
      case 'error':
        return <AlertCircle className="h-3 w-3 text-red-400" />;
      case 'success':
        return <CheckCircle className="h-3 w-3 text-green-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-6 bg-background border-t border-border flex items-center justify-between px-4 text-xs text-muted-foreground z-40">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          {isOnline ? (
            <Wifi className="h-3 w-3 text-green-400" />
          ) : (
            <WifiOff className="h-3 w-3 text-red-400" />
          )}
          <span>{isOnline ? 'Online' : 'Offline'}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <GitBranch className="h-3 w-3" />
          <span>main</span>
        </div>
        
        {getStatusIcon() && (
          <div className="flex items-center gap-1">
            {getStatusIcon()}
            <span className="capitalize">{status}</span>
          </div>
        )}
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <span>Beyond Syllabus v1.0.0</span>
        
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>{currentTime.toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}