import ArticleLayout from '@/containers/layout/ArticleLayout';
import { ARTICLES } from '@/models/article';
import { Metadata } from 'next';
import { NotionAPI } from 'notion-client';
import { FC } from 'react';

interface PageProps {
  params: {
    postId: string;
  };
}

// export const dynamic = 'force-dynamic';
// export const revalidate = 10;

// export async function generateStaticParams(params: type) {
//   const posts = ['post-one']; // Will be object
//   return posts.map((post) => {
//     return {
//       postId: post,
//     };
//   });
// }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = ARTICLES.find((article) => article.id == params.postId);
  if (!article)
    return {
      title: 'WoozLabs | Blog',
      description: 'Make Imagination True.',
    };

  return {
    title: `${article.title} | WoozLabs` || 'WoozLabs | Blog',
    description: article.subtitle || 'Make Imagination True.',
    openGraph: {
      description: article.subtitle || 'Make Imagination True.',
      title: `${article.title} | WoozLabs` || 'WoozLabs | Blog',
      images: article.thumbnailUrl,
      url: `https://blog.woozlabs.com/article/${article.id}`,
      type: 'article',
      authors: article.author,
    },
    twitter: {
      images: article.thumbnailUrl,
    },
  };
}

const page: FC<PageProps> = async ({ params }: PageProps) => {
  const notion = new NotionAPI();

  const article = ARTICLES.find((article) => article.id == params.postId);
  if (!article) throw new Error('Not Found');
  const recordMap = await notion.getPage(article.notionId);

  const currentIndex = ARTICLES.findIndex((a) => a.id == article.id);
  const olderArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null;
  const nextArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null;

  return (
    <>
      <ArticleLayout article={article} recordMap={recordMap} olderArticle={olderArticle} nextArticle={nextArticle} />
    </>
  );
};
export default page;
