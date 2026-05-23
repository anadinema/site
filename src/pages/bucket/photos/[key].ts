import { env } from "cloudflare:workers";
import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const key = params.key;
  if (!key) {
    return new Response("Not found", { status: 404 });
  }

  const bucket = env?.SITE_ASSETS;
  if (!bucket) {
    return new Response("R2 binding SITE_ASSETS is not configured", {
      status: 500,
    });
  }

  const object = (await bucket.get(`photos/${key}`)) ?? (await bucket.get(key));
  if (!object) {
    return new Response("Not found", { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("cache-control", "public, max-age=3600, s-maxage=86400");

  return new Response(object.body, { headers });
};
