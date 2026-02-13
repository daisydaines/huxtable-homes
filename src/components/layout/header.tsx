"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-warm-white/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-black/30 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className={cn(
              "font-serif text-2xl font-bold tracking-tight transition-colors duration-300",
              scrolled ? "text-foreground" : "text-white"
            )}>
              Huxtable
            </span>
            <span className={cn(
              "font-serif text-2xl font-light tracking-tight transition-colors duration-300",
              scrolled ? "text-bronze" : "text-bronze-light"
            )}>
              Homes
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors hover:text-bronze",
                  pathname === link.href
                    ? "text-bronze"
                    : scrolled ? "text-foreground/70" : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild className="bg-bronze hover:bg-bronze-dark text-white">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className={cn(!scrolled && "text-white hover:text-white/80 hover:bg-white/10")}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 px-8 pt-12">
              <SheetTitle className="font-serif text-xl px-0 mb-2">
                Huxtable <span className="text-bronze">Homes</span>
              </SheetTitle>
              <nav className="flex flex-col gap-2 mt-8 px-0">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-lg font-medium tracking-wide transition-colors hover:text-bronze py-3",
                      pathname === link.href
                        ? "text-bronze"
                        : "text-foreground/70"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-6 bg-bronze hover:bg-bronze-dark text-white w-fit px-8">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
