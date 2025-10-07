// src/components/SraBadge.jsx
import { SRA_VALIDATION_URL } from "../config/legal";

/**
 * Renders the official SRA/Yoshki badge via iframe.
 * - Works in dev and prod (no script injection needed).
 * - Provides a fallback link to the SRA validation page if iframe fails.
 *
 * If Yoshki provide you a different iframe SRC for your firm, swap the URL below.
 */
const YOSHKI_IFRAME_SRC = "https://cdn.yoshki.com/iframe/55849r.html";

export default function SraBadge({
  className = "",
  validationUrl = SRA_VALIDATION_URL,
}) {
  return (
    <div className={className}>
      <div
        className="relative mx-auto w-full max-w-[275px]"
        style={{ height: 163 }}
      >
        <iframe
          title="SRA Digital Badge"
          src={YOSHKI_IFRAME_SRC}
          scrolling="no"
          frameBorder="0"
          style={{
            border: 0,
            margin: 0,
            padding: 0,
            backgroundColor: "transparent",
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Fallback: visible if iframe is blocked */}
      <noscript>
        <a
          href={validationUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "0.75rem",
            textDecoration: "underline",
          }}
        >
          Verify with the Solicitors Regulation Authority
        </a>
      </noscript>
    </div>
  );
}
