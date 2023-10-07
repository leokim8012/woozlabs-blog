'use client';

import ArticleRecommendCard from '@/components/Card/ArticleRecommendCard';
import { ARTICLES } from '@/models/article';
import { FC } from 'react';

interface RecommendArticleListProps {}

const RecommendArticleList: FC<RecommendArticleListProps> = () => {
  const articles = ARTICLES.filter((article) => article.recommended);
  return (
    <>
      {articles.map((article) => (
        <div key={article.id} style={{ marginBottom: '24px' }}>
          <ArticleRecommendCard article={article} />
        </div>
      ))}
    </>
  );
};

export default RecommendArticleList;
