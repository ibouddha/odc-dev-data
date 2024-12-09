"use client"


import React from "react";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button";


const ToggleTheme = () => {
    const {setTheme, theme} = useTheme()

  return (
    <Button variant="ghost" 
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    className="relative p-2">
      <SunMedium
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary"
      />
      <Moon
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ToggleTheme;