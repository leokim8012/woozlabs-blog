'use client';

import ArticleRecommendCard from '@/components/Card/ArticleRecommendCard';
import { ARTICLES } from '@/models/article';
import { Typography } from '@woozdesign/ui';
import { FC } from 'react';

interface RecommendArticleListProps {}

const RecommendArticleList: FC<RecommendArticleListProps> = () => {
  const articles = ARTICLES.filter((article) => article.recommended);
  return (
    <>
      <Typography.Text variant="p" align="end" highContrast={false} mr={'4'}>
        Recommended
      </Typography.Text>
      {articles.map((article) => (
        <div key={article.id}>
          <ArticleRecommendCard article={article} />
        </div>
      ))}
    </>
  );
};

export default RecommendArticleList;
