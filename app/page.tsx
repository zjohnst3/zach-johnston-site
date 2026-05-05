import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="hero-glow pt-4 pb-2">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-8">
          <div className="space-y-3 flex-1">
            <h1 className="text-4xl font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>
              Zach Johnston
            </h1>
            <p className="text-lg" style={{ color: "var(--muted)" }}>
              Startup operator and ex-VC.
            </p>
          </div>
          <div className="shrink-0">
            <div
              className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden"
              style={{ boxShadow: "0 0 0 3px var(--background), 0 0 0 5px var(--border)" }}
            >
              <Image src="/avatar.jpg" alt="Zach Johnston" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

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
          className="group p-6 rounded-xl card-gradient"
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
          className="group p-6 rounded-xl card-gradient"
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
