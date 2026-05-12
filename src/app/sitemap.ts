import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';
  const lastModified = new Date();

  const routes = ['', '#about', '#projects', '#contact'];

  return routes.map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
