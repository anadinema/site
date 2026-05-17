/**
 * API client for the Go backend.
 *
 * Usage: once the Go API is deployed, swap the data.ts imports in each
 * page for these functions. The return types are identical.
 *
 * Set API_BASE_URL in your .env:
 *   PUBLIC_API_URL=https://api.anadinema.dev
 */

import type { Post, Project, Photo, List } from '@/types'

const BASE = import.meta.env.PUBLIC_API_URL ?? 'http://localhost:8080'

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
  })
  if (!res.ok) throw new Error(`API error ${res.status} on ${path}`)
  return res.json() as Promise<T>
}

// ── Posts ──────────────────────────────────────────────────────────────────

export const fetchPosts    = ()           => get<Post[]>('/posts')
export const fetchPost     = (slug: string) => get<Post>(`/posts/${slug}`)

// ── Projects ──────────────────────────────────────────────────────────────

export const fetchProjects = ()           => get<Project[]>('/projects')

// ── Photos ────────────────────────────────────────────────────────────────

export const fetchPhotos   = ()           => get<Photo[]>('/photos')

// ── Lists ─────────────────────────────────────────────────────────────────

export const fetchLists    = ()           => get<List[]>('/lists')
export const fetchList     = (slug: string) => get<List>(`/lists/${slug}`)
