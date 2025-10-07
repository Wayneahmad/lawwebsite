// src/pages/MeetTheTeam.jsx
import { useMemo, useState } from "react";
import "../styles/theme.css";
import Header from "../components/layout/Header"; // <— use the sticky header
import HeroBand from "../components/nav/HeroBand";
import SearchOverlay from "../components/SearchOverlay";
import TeamGrid from "../components/TeamGrid";
import ProfileModal from "../components/ProfileModal";

import SiteFooter from "../components/layout/SiteFooter";

import { TEAM, ALL_TAGS } from "../data/team";

export default function MeetTheTeam() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [onlyPartners, setOnlyPartners] = useState(false);
  const [sort] = useState("featured");
  const [openId, setOpenId] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let r = TEAM.filter((m) => {
      const okTag = tag === "All" || m.expertise.includes(tag);
      const okQ =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.expertise.join(" ").toLowerCase().includes(q);
      const okPartner = !onlyPartners || /partner/i.test(m.role);
      return okTag && okQ && okPartner;
    });
    if (sort === "name") r.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "role") r.sort((a, b) => a.role.localeCompare(b.role));
    else r.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    return r;
  }, [query, tag, sort, onlyPartners]);

  return (
    <div className="min-h-screen w-full">
      {/* Sticky header (navbar only) */}
      <Header onOpenSearch={() => setSearchOpen(true)} />

      {/* Hero band stays in page flow (search lives here) */}
      {/* Hero band stays in page flow (search lives here) */}
      <section
        className="
    relative w-full rounded-b-3xl
    mt-[-64px] pt-[64px]
    lg:mt-[-80px] lg:pt-[80px]
    band band--gradient band--vignette
  "
        style={{
          // no border-top so there’s no divider line
          borderColor: "var(--band-border)",
          borderWidth: 0, // or remove if not needed
        }}
      >
        <div className="site-container">
          <HeroBand
            tags={ALL_TAGS}
            query={query}
            setQuery={setQuery}
            tag={tag}
            setTag={setTag}
            onlyPartners={onlyPartners}
            setOnlyPartners={setOnlyPartners}
          />
        </div>
      </section>

      {/* Results */}
      <div className="site-container">
        <p className="pt-6 text-sm font-medium text-slate-600">
          <span className="text-slate-900">Showing {filtered.length}</span>{" "}
          results of <span className="text-slate-900">{TEAM.length}</span>
        </p>
      </div>

      <section className="site-container pt-4 pb-20">
        <TeamGrid people={filtered} onOpen={setOpenId} />
        {filtered.length === 0 && (
          <p className="mt-16 text-center text-slate-500">
            No team members match your filters.
          </p>
        )}
      </section>

      <ProfileModal
        member={TEAM.find((m) => m.id === openId) || null}
        onClose={() => setOpenId(null)}
      />
      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        query={query}
        setQuery={setQuery}
        tag={tag}
        setTag={setTag}
        tags={ALL_TAGS}
        onlyPartners={onlyPartners}
        setOnlyPartners={setOnlyPartners}
      />

      <SiteFooter />
    </div>
  );
}
