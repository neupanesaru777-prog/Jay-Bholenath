import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://bholenath-divine.vercel.app';

  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/gallery`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/teachings`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, changeFrequency: 'monthly', priority: 0.7 }
  ];
}
