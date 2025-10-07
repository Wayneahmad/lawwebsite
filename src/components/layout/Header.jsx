// src/components/layout/Header.jsx
import Navbar from "../nav/Navbar";
import useScrollHeader from "../../hooks/useScrollHeader";

export default function Header({ onOpenSearch, variant = "sticky" }) {
  // You can still track scroll if you use it for link colour tweaks
  useScrollHeader(8);

  const isOverlay = variant === "overlay"; // <-- new

  return (
    <header
      className={[
        isOverlay ? "absolute inset-x-0 top-0" : "sticky top-0", // overlay vs sticky
        "z-40 group/nav bg-transparent",
      ].join(" ")}
    >
      {/* Background layer: transparent by default; white only on hover */}
      <div className="pointer-events-none absolute inset-0 transition-colors duration-300 bg-transparent group-hover/nav:bg-white/95" />
      <div className="relative site-container">
        <Navbar onOpenSearch={onOpenSearch} />
      </div>
    </header>
  );
}
