import type { Project } from "@/types";

export function getProjects(): Project[] {
  return [
    {
      slug: "heimdall",
      name: "heimdall",
      year: 2026,
      description:
        "Lightweight reverse proxy with Cloudflare header validation and per-route rate limiting.",
      longDescription:
        "Lightweight reverse proxy written in Go with built-in Cloudflare secret header validation, per-route rate limiting, and structured JSON logging. Deployed via Docker. Started because I wanted something simpler than Nginx for small projects.",
      tags: ["go", "proxy", "cloudflare", "docker"],
      github: "https://github.com/anadinema/heimdall",
    },
    {
      slug: "logdrain",
      name: "logdrain",
      year: 2025,
      description:
        "CLI to tail and filter JSON logs across multiple Kubernetes pods simultaneously.",
      longDescription:
        "CLI tool to tail and filter structured JSON logs across multiple Kubernetes pods simultaneously. Supports field filtering, regex search, and color-coded severity levels. Works with zerolog, zap, and slog.",
      tags: ["go", "cli", "kubernetes", "observability"],
      github: "https://github.com/anadinema/logdrain",
    },
    {
      slug: "sqlmigrate",
      name: "sqlmigrate",
      year: 2025,
      description:
        "Minimal migration runner for raw SQL files. No DSL, no ORM.",
      longDescription:
        "Minimal migration runner for raw SQL files. No DSL, no ORM. Just numbered .sql files, a migrations table, and a Go binary. Embeds into your app or runs standalone.",
      tags: ["go", "postgres", "cli"],
      github: "https://github.com/anadinema/sqlmigrate",
    },
    {
      slug: "site",
      name: "anadinema.dev",
      year: 2026,
      description:
        "This site. Astro static frontend for blog, projects, lists, and photos.",
      longDescription:
        "Personal portfolio built with Astro + TypeScript as static site. Content lives in-repo and deploys from git with no backend services.",
      tags: ["astro", "typescript", "static-site"],
      github: "https://github.com/anadinema/site",
    },
  ];
}
