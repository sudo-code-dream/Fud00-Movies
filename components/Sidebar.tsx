"use client";
import React, { useEffect } from "react";
import { Home, Film, Tv, Search, Heart, Settings, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // Close sidebar when pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent scrolling when sidebar is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const navigationItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Film, label: "Movies", href: "/movies" },
    { icon: Tv, label: "TV Shows", href: "/tv-shows" },
    { icon: Search, label: "Discover", href: "/discover" },
    { icon: Heart, label: "Favorites", href: "/favorites" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 bg-card shadow-xl transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
      <div className='flex flex-col h-full'>
        <div className='flex items-center justify-between p-4 border-b border-border'>
          <h2 className='text-lg font-bold'>Menu</h2>
          <Button
            variant='ghost'
            size='icon'
            onClick={onClose}
            className='text-muted-foreground hover:text-foreground'>
            <X className='h-5 w-5' />
          </Button>
        </div>

        <nav className='flex-1 p-4'>
          <ul className='space-y-2'>
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className='flex items-center gap-3 p-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors'
                  onClick={onClose}>
                  <item.icon className='h-5 w-5' />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='p-4 border-t border-border'>
          <div className='text-xs text-muted-foreground'>© 2025 Monogram</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
