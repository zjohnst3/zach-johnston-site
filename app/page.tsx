import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>
          Zach Johnston
        </h1>
        <p className="text-lg" style={{ color: "var(--muted)" }}>
          Startup operator and ex-VC.
        </p>
        {/* Tagline placeholder — add your one-liner here */}
      </section>

      {/* Divider */}
      <hr style={{ borderColor: "var(--border)" }} />

      {/* Bio */}
      <section className="space-y-4">
        <p className="text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
          I&apos;ve spent my career at the intersection of capital and company-building — first as a venture investor,
          now as an operator working inside early-stage startups. I care about what it actually takes to build
          something from scratch: the decisions, the tradeoffs, and the writing that helps make sense of it all.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
          On this site you&apos;ll find my writing on startups, investing, and whatever else I&apos;m thinking about,
          along with projects I&apos;ve been a part of.
        </p>
      </section>

      {/* Links */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/blog"
          className="group p-6 rounded-xl border transition-colors"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-sm" style={{ color: "var(--foreground)" }}>Writing</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: "var(--muted)" }}
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Essays and notes on startups, investing, and building.
          </p>
        </Link>

        <Link
          href="/projects"
          className="group p-6 rounded-xl border transition-colors"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-sm" style={{ color: "var(--foreground)" }}>Projects</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: "var(--muted)" }}
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Companies, products, and work I&apos;ve been involved with.
          </p>
        </Link>
      </section>
    </div>
  );
}
