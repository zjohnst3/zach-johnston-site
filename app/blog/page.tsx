export const metadata = {
  title: "Writing — Zach Johnston",
  description: "Essays and notes on startups, investing, and building.",
};

const posts = [
  {
    title: "Coming soon",
    date: "",
    description: "Writing will appear here.",
    href: "#",
  },
];

export default function Blog() {
  return (
    <div className="space-y-12">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>
          Writing
        </h1>
        <p className="text-base" style={{ color: "var(--muted)" }}>
          Essays and notes on startups, investing, and building.
        </p>
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-0">
        {posts.map((post, i) => (
          <article
            key={i}
            className="py-6 border-b flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="space-y-1">
              <a
                href={post.href}
                className="font-medium text-base hover:underline underline-offset-4"
                style={{ color: "var(--foreground)" }}
              >
                {post.title}
              </a>
              {post.description && (
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {post.description}
                </p>
              )}
            </div>
            {post.date && (
              <span className="text-sm shrink-0" style={{ color: "var(--muted)" }}>
                {post.date}
              </span>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
