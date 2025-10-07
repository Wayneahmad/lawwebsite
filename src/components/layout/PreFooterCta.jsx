// src/components/PreFooterCta.jsx
export default function PreFooterCta() {
  return (
    <section className="prefooter">
      {/* Constrain content (matches the rest of the site) */}
      <div className="site-container py-10">
        {/* Content row */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="text-lg font-semibold">
              Looking for the right person?
            </h4>
            <p className="text-sm footer-muted">
              Tell us what you need and we'll introduce the best team for your
              matter.
            </p>
          </div>

          <a href="/contact" className="btn btn-accent">
            Start a conversation
          </a>
        </div>

        {/* Single divider, same width as content */}
        <hr className="my-6 border footer-border" />
      </div>
    </section>
  );
}
