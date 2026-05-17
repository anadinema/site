export interface Post {
  slug: string
  title: string
  date: string        // e.g. "may 26" for listing, ISO string for detail
  year: number
  tag: string
  body?: string       // markdown string, populated on detail page
}

export interface Project {
  slug: string
  name: string
  year: number
  description: string
  longDescription?: string
  tags: string[]
  github?: string
  url?: string
}

export interface Photo {
  id: string
  src: string
  alt?: string
  caption: string
  location: string
  tall?: boolean      // spans 2 rows in grid
}

export type ItemStatus = 'want' | 'done' | 'maybe' | 'now'

export interface ListItem {
  name: string
  note: string
  status: ItemStatus
  date?: string       // "added jan 26" etc.
}

export interface List {
  slug: string
  emoji: string
  name: string
  description: string
  items: ListItem[]
}
