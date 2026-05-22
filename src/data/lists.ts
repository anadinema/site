import type { List } from "@/types";

export function getLists(): List[] {
  return [
    {
      slug: "buy",
      emoji: "🛒",
      name: "things I want to buy",
      description:
        "with reasoning. updated whenever I add something or change my mind.",
      items: [
        {
          name: "Bambu Lab P1S",
          note: "3D printer for prototyping enclosures and brackets for homelab gear. P1S specifically for the enclosure (ABS) and multi-material support. Been on this list 6 months.",
          status: "want",
          date: "added jan 26",
        },
        {
          name: "Herman Miller Aeron",
          note: "Tried it at a coworking space for a week. PostureFit SL makes a real difference. Hard to justify but I'm at a desk 10h a day.",
          status: "want",
          date: "added mar 26",
        },
        {
          name: "Shure SM7dB",
          note: "Built-in preamp, no separate interface needed. Overkill for calls but I want to record more. Still thinking.",
          status: "maybe",
          date: "added apr 26",
        },
        {
          name: "APC Back-UPS 700VA",
          note: "UPS for the NAS. Two unclean shutdowns from power blips. Finally sorted.",
          status: "done",
          date: "feb 26",
        },
        {
          name: "TE OP-1 Field",
          note: "Pure want, no justification. Beautiful object that makes music. Price is absurd. I think about it every few months and put it back.",
          status: "maybe",
          date: "added dec 25",
        },
      ],
    },
    {
      slug: "books",
      emoji: "📚",
      name: "books in queue",
      description: "rough priority order. updated as I finish or reprioritise.",
      items: [
        {
          name: "Database Internals — Petrov",
          note: "Storage engines, B-trees, LSM trees. Great for understanding what's under the query layer.",
          status: "now",
        },
        {
          name: "Designing Data-Intensive Apps — Kleppmann",
          note: "Read chapters out of order — want a proper front-to-back read.",
          status: "want",
        },
        {
          name: "The Linux Programming Interface",
          note: "The definitive reference on syscalls and POSIX. Dense, worth it.",
          status: "maybe",
        },
        {
          name: "100 Go Mistakes — Harsanyi",
          note: "Lots of things I thought I understood but didn't. Recommended for anyone past beginner in Go.",
          status: "done",
        },
      ],
    },
    {
      slug: "tools",
      emoji: "🔧",
      name: "tools I'm evaluating",
      description: "actively trying. will move to /stack if they stick.",
      items: [
        {
          name: "Zed",
          note: "Fast, Rust-written. LSP support catching up to Neovim. Multiplayer is genuinely interesting. Not switching yet.",
          status: "now",
        },
        {
          name: "Temporal",
          note: "Workflow orchestration for durable async jobs. Considering for reliable long-running task processing. Heavy to self-host.",
          status: "want",
        },
        {
          name: "Nix / nix-darwin",
          note: "Reproducible dev environments. Planning nix-darwin before NixOS on anything important.",
          status: "maybe",
        },
      ],
    },
    {
      slug: "restaurants",
      emoji: "🍜",
      name: "stockholm restaurants",
      description: "places I like, have tried, or want to go.",
      items: [
        {
          name: "Ekstedt — Östermalm",
          note: "Nordic tasting menu over open fire. Book well in advance.",
          status: "want",
        },
        {
          name: "Punk Royale — Södermalm",
          note: "Chaotic, loud, creative tasting menu. Memorable.",
          status: "done",
        },
        {
          name: "Ramen Kondo — Vasastan",
          note: "Small, serious ramen. Tonkotsu consistently excellent. Cash only. Queue early weekends.",
          status: "done",
        },
        {
          name: "Agrikultur — Östermalm",
          note: "Hyper-seasonal Nordic, no fixed menu. Requires commitment.",
          status: "want",
        },
      ],
    },
  ];
}

export function getList(slug: string): List | undefined {
  return getLists().find((l) => l.slug === slug);
}
