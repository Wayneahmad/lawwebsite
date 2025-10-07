import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactBand() {
  return (
    <section
      className="relative w-full border-t"
      style={{
        backgroundColor: "var(--brand-primary)", // <- same token as header
        borderColor: "var(--band-border)",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr_1fr] md:items-center">
          {/* Left: message */}
          <div className="text-white">
            <h3 className="text-xl font-semibold tracking-tight">
              Ready to talk?
            </h3>
            <p className="mt-1 text-sm text-white/85">
              Tell us what you need and we’ll introduce the best team for your
              matter.
            </p>
          </div>

          {/* Middle: contact channels */}
          <div className="flex flex-col gap-3">
            <a
              href="tel:02034755545"
              className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/15 transition"
            >
              <Phone className="h-4 w-4" />
              0203 475 5545
            </a>
            <a
              href="mailto:contact@sperrinlaw.co.uk"
              className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/15 transition"
            >
              <Mail className="h-4 w-4" />
              contact@sperrinlaw.co.uk
            </a>
            <a
              href="https://maps.app.goo.gl/..."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/15 transition"
            >
              <MapPin className="h-4 w-4" />
              81 Chancery Lane, London WC2A 1DD
            </a>
          </div>

          {/* Right: primary CTA */}
          <div className="md:justify-self-end">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:brightness-110"
              style={{ backgroundColor: "var(--brand-accent)" }}
            >
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
