export const revalidate = 3600;

export const metadata = {
  title: "Writing — Zach Johnston",
  description: "Essays and notes on startups, investing, and building.",
};

interface Post {
  title: string;
  date: string;
  description: string;
  href: string;
}

function extractText(xml: string, tag: string): string {
  const cdataMatch = xml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`));
  if (cdataMatch) return cdataMatch[1].trim();
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return match ? match[1].trim() : "";
}

function formatDate(pubDate: string): string {
  const date = new Date(pubDate);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

async function getSubstackPosts(): Promise<Post[]> {
  try {
    const res = await fetch("https://zacjohnston.substack.com/feed", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const itemMatches = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
    return itemMatches.map((item) => ({
      title: extractText(item, "title"),
      href: extractText(item, "link"),
      date: formatDate(extractText(item, "pubDate")),
      description: extractText(item, "description").replace(/<[^>]+>/g, "").slice(0, 160).trim(),
    }));
  } catch {
    return [];
  }
}

export default async function Blog() {
  const posts = await getSubstackPosts();

  return (
    <div className="space-y-12">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>
          Writing
        </h1>
        <p className="text-base" style={{ color: "var(--muted)" }}>
          Essays and notes on startups, investing, and building.{" "}
          <a
            href="https://zacjohnston.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
            style={{ color: "var(--foreground)" }}
          >
            Subscribe on Substack →
          </a>
        </p>
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-0">
        {posts.length === 0 ? (
          <p className="text-sm py-6" style={{ color: "var(--muted)" }}>
            No posts yet.
          </p>
        ) : (
          posts.map((post, i) => (
            <article
              key={i}
              className="py-6 border-b flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="space-y-1">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
          ))
        )}
      </section>
    </div>
  );
}
