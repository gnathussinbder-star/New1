import type { MetadataRoute } from 'next';
import { lessons } from '@/content/lessons';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);
  if (!base) return [];
  const origin = base.replace(/\/$/, '');
  const staticRoutes = ['', '/library', '/test', '/privacy', '/terms', '/login'];
  const staticEntries = staticRoutes.map((route) => ({ url: `${origin}${route}`, changeFrequency: 'weekly' as const, priority: route === '' ? 1 : 0.6 }));
  const lessonEntries = lessons.map((lesson) => ({ url: `${origin}/library/${lesson.slug}`, changeFrequency: 'monthly' as const, priority: 0.5 }));
  return [...staticEntries, ...lessonEntries];
}
