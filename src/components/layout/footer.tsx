import Link from "next/link";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight">
                Huxtable{" "}
                <span className="font-light text-bronze-light">Homes</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              {COMPANY.tagline}. Designing and building bespoke luxury residences since {COMPANY.founded}.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Navigation</h3>
            <nav className="flex flex-col gap-3">
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
              <a
                href={`tel:${COMPANY.phone}`}
                className="hover:text-bronze-light transition-colors"
              >
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover:text-bronze-light transition-colors"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} Huxtable Homes. All rights reserved.</p>
          <p>Designed with care in Holladay, Utah</p>
        </div>
      </div>
    </footer>
  );
}
