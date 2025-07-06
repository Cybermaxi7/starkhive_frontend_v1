'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import {
  Hexagon,
  Menu,
  X,
  Users,
  Briefcase,
  Star,
  BookOpen,
  Info,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Hexagon },
    { href: '/explore', label: 'Explore', icon: Users },
    { href: '/jobs', label: 'Browse Jobs', icon: Briefcase },
    { href: '/success-stories', label: 'Success Stories', icon: Star },
    { href: '/learn', label: 'Learn', icon: BookOpen },
    { href: '/about', label: 'About', icon: Info },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 sm:gap-3">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              {/* Current icon - Hexagon (geometric, modern) */}
              {/* <Hexagon className="w-4 sm:w-6 h-4 sm:h-6 text-white" /> */}
              {/* Alternative stylish icons - uncomment one and comment out the above */}
              <Zap className="w-6 h-6 text-white" />{' '}
              {/* Lightning bolt - dynamic, energy */}
              {/* <Diamond className="w-6 h-6 text-white" />{' '} */}
              {/* Diamond - premium, valuable */}
              {/* <Sparkles className="w-6 h-6 text-white" />{' '} */}
              {/* Sparkles - magical, innovative */}
              {/* <Layers className="w-6 h-6 text-white" />{' '} */}
              {/* Layers - structured, organized */}
              {/* <Workflow className="w-6 h-6 text-white" />{' '} */}
              {/* Workflow - process, collaboration */}
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              StarkHive
            </span>

            {/* Image logos (commented out for now) */}
            {/* 
            {!logoError ? (
              <div className="relative w-40 h-12 flex items-center">
                <Image
                  src={
                    theme === 'dark'
                      ? '/assets/images/starkhive-logo-dark.png'
                      : '/assets/images/starkhive-logo-white.png'
                  }
                  alt="StarkHive Logo"
                  width={160}
                  height={48}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  priority
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  StarkHive
                </span>
              </div>
            )}
            */}
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative py-2 px-3 rounded-lg transition-all duration-200 ease-in-out',
                    'hover:text-foreground hover:bg-accent/50',
                    active
                      ? 'text-foreground bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20'
                      : 'text-muted-foreground',
                  )}
                >
                  {item.label}
                  {active && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Auth Buttons & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/40">
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200',
                      'hover:text-foreground hover:bg-accent',
                      active
                        ? 'text-foreground bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20'
                        : 'text-muted-foreground',
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="flex-1">{item.label}</span>
                    {active && (
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    )}
                  </Link>
                );
              })}

              <div className="flex flex-col gap-3 pt-4 border-t border-border/40">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
