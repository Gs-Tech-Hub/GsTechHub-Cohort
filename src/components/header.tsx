'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Accelerator Program</span>
          </a>
          <div className="flex gap-6 text-sm">
            <a href="/programs" className={cn(buttonVariants({ variant: 'ghost' }))}>
              Programs
            </a>
            <a href="/mentors" className={cn(buttonVariants({ variant: 'ghost' }))}>
              Mentors
            </a>
            <a href="/about" className={cn(buttonVariants({ variant: 'ghost' }))}>
              About
            </a>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="flex items-center">
            <ThemeToggle />
          </div>
          <a href="/apply" className={cn(buttonVariants({ variant: 'default' }))}>
            Apply Now
          </a>
        </div>
      </nav>
    </header>
  );
}