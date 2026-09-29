// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { blogsData } from '@/data/blogsData';
import { modulesData } from '@/data/modulesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.odimax.com.tr';

  // 1. Sabit Sayfalar
  const staticRoutes = [
    '',
    '/about',
    '/pricing',
    '/contact',
    '/blog',
    '/privacy',
    '/terms',
    '/kvkk',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dinamik Blog Sayfaları (Oluşturduğumuz blogsData'dan otomatik çekilir)
  const blogRoutes = blogsData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishedAt}T00:00:00+03:00`),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const moduleRoutes = Object.values(modulesData).map((module) => ({
    url: `${baseUrl}/modules/${module.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...moduleRoutes, ...blogRoutes];
}
