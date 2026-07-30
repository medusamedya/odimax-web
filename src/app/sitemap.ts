// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { blogsData } from '@/data/blogsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.odimax.com.tr';

  // 1. Sabit Sayfalar
  const staticRoutes = [
    '',
    '/about',
    '/pricing',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dinamik Blog Sayfaları (Oluşturduğumuz blogsData'dan otomatik çekilir)
  const blogRoutes = blogsData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(), 
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}