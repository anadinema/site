import { type CollectionEntry, getCollection } from "astro:content";

export interface BlogPost {
  slug: string;
  title: string;
  tag: string;
  date: string;
  year: number;
  order: number;
}

const curatedSlugs = [
  "go-channels-not-always-the-answer",
  "tracing-a-latency-spike",
  "homelab-2025",
  "why-i-stopped-using-orms",
  "postgres-explain-output",
];

function toPost(entry: CollectionEntry<"blog">): BlogPost {
  return {
    slug: entry.id,
    title: entry.data.title,
    tag: entry.data.tag,
    date: entry.data.date,
    year: entry.data.year,
    order: entry.data.order,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const entries = await getCollection("blog");
  return entries.map(toPost).sort((a, b) => a.order - b.order);
}

export async function getCuratedBlogPosts(): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  const bySlug = new Map(posts.map((post) => [post.slug, post]));
  return curatedSlugs.flatMap((slug) => {
    const post = bySlug.get(slug);
    return post ? [post] : [];
  });
}
