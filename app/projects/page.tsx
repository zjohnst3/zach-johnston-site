export const metadata = {
  title: "Projects — Zach Johnston",
  description: "Companies, products, and work I've been involved with.",
};

const projects = [
  {
    name: "Coming soon",
    description: "Projects will appear here.",
    role: "",
    href: "#",
  },
];

export default function Projects() {
  return (
    <div className="space-y-12">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>
          Projects
        </h1>
        <p className="text-base" style={{ color: "var(--muted)" }}>
          Companies, products, and work I&apos;ve been involved with.
        </p>
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border space-y-2"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <a
                  href={project.href}
                  className="font-medium text-base hover:underline underline-offset-4"
                  style={{ color: "var(--foreground)" }}
                >
                  {project.name}
                </a>
                {project.role && (
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                    {project.role}
                  </p>
                )}
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {project.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
