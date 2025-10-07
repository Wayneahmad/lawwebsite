// src/components/layout/SiteFooter.jsx
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

const LINKS = {
  quick: [
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Team", href: "/team" },
    { label: "News", href: "/news" },
  ],
  services: [
    { label: "Criminal Law", href: "/services/criminal-law" },
    { label: "Financial Crime", href: "/services/financial-crime" },
    { label: "Civil Law", href: "/services/civil-law" },
    { label: "Extradition", href: "/services/extradition" },
    { label: "ALL SERVICES", href: "/services", accent: true },
  ],
  policies: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Cookie policy", href: "/cookies" },
    { label: "Terms", href: "/terms" },
    { label: "Complaints", href: "/complaints" },
    { label: "Legal & Regulatory info", href: "/legal" },
    { label: "Modern slavery statement", href: "/modern-slavery" },
  ],
};

function FooterHeading({ children }) {
  return <h3 className="text-base font-semibold tracking-tight">{children}</h3>;
}

export default function SiteFooter() {
  return (
    <footer className="footer footer--gradient relative w-full text-sm">
      {/* Content container */}
      <div className="site-container py-10">
        {/* === CTA moved here === */}
        <div className="Footer-header">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-lg font-semibold text-white">
                Looking for the right person?
              </h4>
              <p className="text-sm footer-muted">
                Tell us what you need and we’ll introduce the best team for your
                matter.
              </p>
            </div>

            <a href="/contact" className="btn btn-accent">
              Start a conversation
            </a>
          </div>

          {/* Divider under CTA */}
          <hr className="my-6 border footer-border" />
        </div>

        {/* Top grid */}
        <div className="mt-10 grid gap-10 md:grid-cols-4">
          {/* Quick links */}
          <div>
            <FooterHeading>Quick links</FooterHeading>
            <ul className="mt-4 space-y-2">
              {LINKS.quick.map((l) => (
                <li key={l.label}>
                  <a className="hover:text-white" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-4 space-y-2">
              {LINKS.services.map((l) => (
                <li key={l.label}>
                  <a
                    className={
                      l.accent
                        ? "font-semibold footer-accent"
                        : "hover:text-white"
                    }
                    href={l.href}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <FooterHeading>Contacts</FooterHeading>
            <address className="not-italic mt-4 space-y-2 footer-muted">
              <p>
                81 Chancery Lane,
                <br />
                London,
                <br />
                WC2A 1DD
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> 0203 475 5545
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a className="hover:text-white" href="/contact">
                  Contact
                </a>
              </p>
            </address>
          </div>

          {/* Socials + SRA */}
          <div>
            <FooterHeading>Socials</FooterHeading>
            <div className="mt-4 flex items-center gap-3">
              <a
                aria-label="LinkedIn"
                className="hover:text-white"
                href="https://www.linkedin.com"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                aria-label="Twitter / X"
                className="hover:text-white"
                href="https://x.com"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>

            {/* SRA badge (hosted) */}
            <div className="mt-6">
              <a
                href="https://www.sra.org.uk/validation?083082065+069110103108105115104077111110111+068101102097117108116046112110103+104116116112115058047047115112101114114105110108097119046110101116047&UGxEQk3X8u8DDbm6tGfHAKJM4%2bIKtue0"
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border footer-border bg-white p-0 overflow-hidden"
                aria-label="Solicitors Regulation Authority - Check this firm"
              >
                <img
                  src="https://cdn.yoshki.com/SRA/EnglishMono/275/0/Default.png"
                  alt="Solicitors Regulation Authority – Check this firm"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border footer-border" />

        {/* Policies row */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[13px] footer-muted text-center">
          {LINKS.policies.map((l) => (
            <a key={l.label} className="hover:text-white" href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Legal strip — full-bleed */}
      <div className="bg-white/10 border-t footer-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <p className="mx-auto max-w-3xl text-center text-xs footer-muted leading-6">
            © {new Date().getFullYear()} Sperrin Law Limited. All Rights
            Reserved.&nbsp; Sperrin Law is the trading name of Sperrin Law
            Limited, a limited liability company registered in England and Wales
            (No. 09907229). Registered office and principal office: 81 Chancery
            Ln, London, WC2A 1DD. The firm is authorised and regulated by the
            Solicitors Regulation Authority (No. 627652). VAT registration
            number: 256746374.
          </p>
        </div>
      </div>
    </footer>
  );
}
