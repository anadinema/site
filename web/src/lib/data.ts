/**
 * Placeholder data module.
 *
 * Each function here mirrors the shape of what the Go API will return.
 * When the API is ready, replace these with calls to api.ts.
 *
 * Example replacement for getPosts():
 *   import { fetchPosts } from './api'
 *   export const getPosts = fetchPosts
 */

import type { Post, Project, Photo, List } from '@/types'

// ── Posts ────────────────────────────────────────────────────────────

export function getPosts(): Post[] {
  return [
    { slug: 'go-channels-not-always-the-answer', title: "Go channels aren't always the answer",         date: 'may 26', year: 2026, tag: 'go'   },
    { slug: 'tracing-a-latency-spike',            title: 'Tracing a latency spike in production',       date: 'apr 26', year: 2026, tag: 'ops'  },
    { slug: 'go-project-structure-2025',          title: 'How I structure my Go projects in 2025',      date: 'feb 26', year: 2026, tag: 'go'   },
    { slug: 'cloudflare-workers-backend-devs',    title: 'Notes on Cloudflare Workers for backend devs',date: 'jan 26', year: 2026, tag: 'infra' },
    { slug: 'why-i-stopped-using-orms',           title: 'Why I stopped using ORMs',                   date: 'dec 25', year: 2025, tag: 'db'   },
    { slug: 'pgx-vs-database-sql',                title: 'pgx vs database/sql — when it actually matters', date: 'oct 25', year: 2025, tag: 'go'   },
    { slug: 'neovim-go-setup',                    title: 'My Neovim setup for Go development',         date: 'aug 25', year: 2025, tag: 'tools' },
    { slug: 'homelab-2025',                       title: 'Homelab 2025: what I actually use it for',   date: 'jun 25', year: 2025, tag: 'infra' },
    { slug: 'postgres-explain-output',            title: 'Understanding Postgres EXPLAIN output',       date: 'mar 25', year: 2025, tag: 'db'   },
  ]
}

export function getPost(slug: string): Post | undefined {
  const post = getPosts().find(p => p.slug === slug)
  if (!post) return undefined
  return {
    ...post,
    body: `# ${post.title}\n\nThis is placeholder content. The real content will come from the API.\n\nReplace this by fetching from \`/api/posts/${slug}\` in the Go backend.\n`,
  }
}

export function getCuratedPosts(): Post[] {
  const slugs = [
    'go-channels-not-always-the-answer',
    'tracing-a-latency-spike',
    'homelab-2025',
    'why-i-stopped-using-orms',
    'postgres-explain-output',
  ]
  return slugs.map(s => getPosts().find(p => p.slug === s)!).filter(Boolean)
}

// ── Projects ─────────────────────────────────────────────────────────

export function getProjects(): Project[] {
  return [
    {
      slug: 'heimdall',
      name: 'heimdall',
      year: 2026,
      description: 'Lightweight reverse proxy with Cloudflare header validation and per-route rate limiting.',
      longDescription: 'Lightweight reverse proxy written in Go with built-in Cloudflare secret header validation, per-route rate limiting, and structured JSON logging. Deployed via Docker. Started because I wanted something simpler than Nginx for small projects.',
      tags: ['go', 'proxy', 'cloudflare', 'docker'],
      github: 'https://github.com/anadinema/heimdall',
    },
    {
      slug: 'logdrain',
      name: 'logdrain',
      year: 2025,
      description: 'CLI to tail and filter JSON logs across multiple Kubernetes pods simultaneously.',
      longDescription: 'CLI tool to tail and filter structured JSON logs across multiple Kubernetes pods simultaneously. Supports field filtering, regex search, and color-coded severity levels. Works with zerolog, zap, and slog.',
      tags: ['go', 'cli', 'kubernetes', 'observability'],
      github: 'https://github.com/anadinema/logdrain',
    },
    {
      slug: 'sqlmigrate',
      name: 'sqlmigrate',
      year: 2025,
      description: 'Minimal migration runner for raw SQL files. No DSL, no ORM.',
      longDescription: 'Minimal migration runner for raw SQL files. No DSL, no ORM. Just numbered .sql files, a migrations table, and a Go binary. Embeds into your app or runs standalone.',
      tags: ['go', 'postgres', 'cli'],
      github: 'https://github.com/anadinema/sqlmigrate',
    },
    {
      slug: 'site',
      name: 'anadinema.dev',
      year: 2026,
      description: 'This site. Astro frontend, Go API, Postgres via Supabase. All behind Cloudflare.',
      longDescription: 'Personal portfolio with blog, projects, lists, and photos. Astro + TypeScript on Vercel, Go + Chi API on Google Cloud Run, Postgres via Supabase. Everything behind Cloudflare. Monorepo with OpenAPI as the contract layer.',
      tags: ['astro', 'typescript', 'go', 'cloudflare', 'supabase'],
      github: 'https://github.com/anadinema/site',
    },
  ]
}

// ── Photos ───────────────────────────────────────────────────────────

export function getPhotos(): Photo[] {
  return [
    { id: 'sthlm1',  src: 'https://picsum.photos/seed/sthlm1/600/900',  caption: 'Gamla Stan in January', location: 'stockholm',  tall: true  },
    { id: 'sthlm3',  src: 'https://picsum.photos/seed/sthlm3/600/400',  caption: 'First snow',            location: 'djurgården'              },
    { id: 'sthlm5',  src: 'https://picsum.photos/seed/sthlm5/600/400',  caption: 'Morning ferry',         location: 'södermalm'               },
    { id: 'sthlm9',  src: 'https://picsum.photos/seed/sthlm9/600/900',  caption: 'Alley off Hornsgatan',  location: 'stockholm',  tall: true  },
    { id: 'sthlm11', src: 'https://picsum.photos/seed/sthlm11/600/400', caption: 'Market day',            location: 'östermalm'               },
    { id: 'sthlm13', src: 'https://picsum.photos/seed/sthlm13/600/400', caption: 'Late light',            location: 'lidingö'                 },
    { id: 'sthlm15', src: 'https://picsum.photos/seed/sthlm15/600/400', caption: 'Rainy platform',        location: 't-centralen'             },
    { id: 'sthlm17', src: 'https://picsum.photos/seed/sthlm17/600/400', caption: 'Archipelago',           location: 'vaxholm'                 },
  ]
}

export function getStripPhotos(): Photo[] {
  return getPhotos()
    .filter(p => !p.tall)
    .slice(0, 4)
    .map(p => ({ ...p, src: p.src.replace('600/400', '400/300') }))
}

// ── Lists ─────────────────────────────────────────────────────────────

export function getLists(): List[] {
  return [
    {
      slug: 'buy',
      emoji: '🛒',
      name: 'things I want to buy',
      description: 'with reasoning. updated whenever I add something or change my mind.',
      items: [
        { name: 'Bambu Lab P1S',        note: '3D printer for prototyping enclosures and brackets for homelab gear. P1S specifically for the enclosure (ABS) and multi-material support. Been on this list 6 months.', status: 'want',  date: 'added jan 26' },
        { name: 'Herman Miller Aeron',  note: 'Tried it at a coworking space for a week. PostureFit SL makes a real difference. Hard to justify but I\'m at a desk 10h a day.',                                         status: 'want',  date: 'added mar 26' },
        { name: 'Shure SM7dB',          note: 'Built-in preamp, no separate interface needed. Overkill for calls but I want to record more. Still thinking.',                                                           status: 'maybe', date: 'added apr 26' },
        { name: 'APC Back-UPS 700VA',   note: 'UPS for the NAS. Two unclean shutdowns from power blips. Finally sorted.',                                                                                               status: 'done',  date: 'feb 26'       },
        { name: 'TE OP-1 Field',        note: 'Pure want, no justification. Beautiful object that makes music. Price is absurd. I think about it every few months and put it back.',                                    status: 'maybe', date: 'added dec 25' },
      ],
    },
    {
      slug: 'books',
      emoji: '📚',
      name: 'books in queue',
      description: 'rough priority order. updated as I finish or reprioritise.',
      items: [
        { name: 'Database Internals — Petrov',        note: 'Storage engines, B-trees, LSM trees. Great for understanding what\'s under the query layer.',             status: 'now'  },
        { name: 'Designing Data-Intensive Apps — Kleppmann', note: 'Read chapters out of order — want a proper front-to-back read.',                                   status: 'want' },
        { name: 'The Linux Programming Interface',    note: 'The definitive reference on syscalls and POSIX. Dense, worth it.',                                       status: 'maybe' },
        { name: '100 Go Mistakes — Harsanyi',         note: 'Lots of things I thought I understood but didn\'t. Recommended for anyone past beginner in Go.',         status: 'done'  },
      ],
    },
    {
      slug: 'tools',
      emoji: '🔧',
      name: 'tools I\'m evaluating',
      description: 'actively trying. will move to /uses if they stick.',
      items: [
        { name: 'Zed',      note: 'Fast, Rust-written. LSP support catching up to Neovim. Multiplayer is genuinely interesting. Not switching yet.',                  status: 'now'   },
        { name: 'Temporal', note: 'Workflow orchestration for durable async jobs. Considering for reliable long-running task processing. Heavy to self-host.',         status: 'want'  },
        { name: 'Nix / nix-darwin', note: 'Reproducible dev environments. Planning nix-darwin before NixOS on anything important.',                                   status: 'maybe' },
      ],
    },
    {
      slug: 'restaurants',
      emoji: '🍜',
      name: 'stockholm restaurants',
      description: 'places I like, have tried, or want to go.',
      items: [
        { name: 'Ekstedt — Östermalm',    note: 'Nordic tasting menu over open fire. Book well in advance.',                               status: 'want' },
        { name: 'Punk Royale — Södermalm',note: 'Chaotic, loud, creative tasting menu. Memorable.',                                        status: 'done' },
        { name: 'Ramen Kondo — Vasastan', note: 'Small, serious ramen. Tonkotsu consistently excellent. Cash only. Queue early weekends.', status: 'done' },
        { name: 'Agrikultur — Östermalm', note: 'Hyper-seasonal Nordic, no fixed menu. Requires commitment.',                              status: 'want' },
      ],
    },
  ]
}

export function getList(slug: string): List | undefined {
  return getLists().find(l => l.slug === slug)
}
