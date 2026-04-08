import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Huxtable Homes"
                width={140}
                height={110}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-2 text-sm text-primary-foreground/70 tracking-wide">
              {COMPANY.tagline}
            </p>
            <p className="mt-3 text-sm text-primary-foreground/50">
              {COMPANY.brandLine}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Navigation</h3>
            <nav className="grid grid-cols-2 gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/60 hover:text-bronze-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <p>{COMPANY.address}</p>
              <Link
                href="/contact"
                className="hover:text-bronze-light transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} Huxtable Homes. All rights reserved.</p>
          <p>Holladay, Utah</p>
        </div>
      </div>
    </footer>
  );
}
