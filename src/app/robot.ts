// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Eğer Google'ın taramasını istemediğin gizli sayfalar olursa buraya disallow: '/ornek-sayfa' yazabilirsin
    },
    sitemap: 'https://www.odimax.com.tr/sitemap.xml',
  };
}