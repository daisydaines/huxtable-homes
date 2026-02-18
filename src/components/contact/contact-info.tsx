import { COMPANY } from "@/lib/constants";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-xl font-semibold mb-4">Get in Touch</h3>
        <p className="text-muted-foreground leading-relaxed">
          We&apos;d love to hear about your project. Whether you&apos;re
          dreaming of a new build or considering a major renovation, our team is
          here to help bring your vision to life.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
            Address
          </p>
          <p className="font-medium">{COMPANY.address}</p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
            Phone
          </p>
          <div className="flex flex-col gap-1">
            {COMPANY.phone.map((num) => (
              <a
                key={num}
                href={`tel:${num}`}
                className="font-medium hover:text-bronze transition-colors"
              >
                {num}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
            Email
          </p>
          <a
            href={`mailto:${COMPANY.email}`}
            className="font-medium hover:text-bronze transition-colors"
          >
            {COMPANY.email}
          </a>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
            Hours
          </p>
          <p className="font-medium">Monday — Friday, 9am — 6pm PST</p>
        </div>
      </div>
    </div>
  );
}
