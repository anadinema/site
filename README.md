# anadinema.dev

Personal portfolio — Astro frontend + Go API.

```
apps/
  web/   → Astro + TypeScript  → Vercel
  api/   → Go + Gin            → Google Cloud Run (or any container host)
```

---

## Quick start

### Prerequisites
- Node 20+
- Go 1.23+
- A Supabase project (or any Postgres DB)

### 1. Clone & install

```bash
git clone https://github.com/anadinema/site
cd site

# Install frontend deps
npm install
```

### 2. Environment variables

```bash
cp .env.example apps/web/.env
cp .env.example apps/api/.env
# Fill in DATABASE_URL, CF_SECRET, AUTH_SECRET
```

### 3. Run locally

```bash
# Terminal 1 — frontend
npm run dev                      # starts Astro at localhost:4321

# Terminal 2 — API
cd apps/api
go run ./cmd/server              # starts Go API at localhost:8080
```

---

## Frontend (Astro)

```
src/
  layouts/Base.astro      → nav, footer, theme toggle, FOUC prevention
  components/             → Nav, Footer, PhotoStrip
  pages/
    index.astro           → home
    writing/
      index.astro         → post listing
      [slug].astro        → post detail
    projects.astro
    photos.astro
    uses.astro
    lists/
      index.astro         → list index
      [slug].astro        → list detail
  lib/
    data.ts               → placeholder data (replace with api.ts calls)
    api.ts                → typed API client for Go backend
  types/index.ts          → shared TypeScript types
```

### Switching to live API

Each page has a comment block showing the swap. Example for `writing/index.astro`:

```typescript
// Replace:
import { getPosts } from '@/lib/data'
const posts = getPosts()

// With:
export const prerender = false
import { fetchPosts } from '@/lib/api'
const posts = await fetchPosts()
```

---

## API (Go)

```
cmd/server/main.go          → entry point, router setup
internal/
  db/client.go              → pgx pool
  middleware/
    cf_secret.go            → Cloudflare secret header check + CORS
    auth.go                 → Bearer token auth for admin routes
  handlers/handlers.go      → all route handlers (stub → fill in DB queries)
```

### Running with Docker

```bash
cd apps/api
docker build -t anadinema-api .
docker run -p 8080:8080 --env-file .env anadinema-api
```

### Deploying to Cloud Run

```bash
gcloud run deploy anadinema-api \
  --source apps/api \
  --region europe-north1 \
  --allow-unauthenticated \
  --set-env-vars DATABASE_URL=...,CF_SECRET=...,AUTH_SECRET=...
```

---

## Database schema

Run these against your Supabase Postgres:

```sql
CREATE TABLE posts (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug         text UNIQUE NOT NULL,
  title        text NOT NULL,
  tag          text NOT NULL,
  body         text NOT NULL DEFAULT '',
  published_at timestamptz,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE projects (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug             text UNIQUE NOT NULL,
  name             text NOT NULL,
  year             int  NOT NULL,
  description      text NOT NULL,
  long_description text,
  tags             text[] NOT NULL DEFAULT '{}',
  github_url       text,
  live_url         text,
  created_at       timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE photos (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  src        text NOT NULL,
  caption    text NOT NULL,
  location   text NOT NULL,
  tall       boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE lists (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        text UNIQUE NOT NULL,
  emoji       text NOT NULL DEFAULT '',
  name        text NOT NULL,
  description text NOT NULL DEFAULT '',
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE list_items (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  list_id    uuid NOT NULL REFERENCES lists(id) ON DELETE CASCADE,
  name       text NOT NULL,
  note       text NOT NULL DEFAULT '',
  status     text NOT NULL CHECK (status IN ('want','done','maybe','now')),
  created_at timestamptz NOT NULL DEFAULT now()
);
```

---

## Cloudflare setup

1. Add `anadinema.dev` to Cloudflare (already there)
2. **Frontend**: CNAME `@` → `cname.vercel-dns.com` · proxy ON · SSL: Full Strict  
3. **API**: CNAME `api` → Cloud Run URL · proxy ON · SSL: Full Strict  
4. **Transform Rule**: add `X-CF-Secret: <your CF_SECRET>` to all requests  
5. **Bot Fight Mode**: ON  
6. **Crawlers**: configure in Security → Bots as needed
