import { ARTICLES, IArticle } from '@/models/article';

export default async function sitemap() {
  const articles = ARTICLES.map((post) => ({
    url: `https://blog.woozlabs.com/article/${post.id}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = [''].map((route) => ({
    url: `https://blog.woozlabs.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...articles];
}
