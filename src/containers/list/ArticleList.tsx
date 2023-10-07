'use client';

import ArticleListCard from '@/components/Card/ArticleListCard';
import { IArticle } from '@/models/article';
import { FC } from 'react';

interface ArticleListProps {
  articles: IArticle[];
}

const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <div key={article.id} style={{ marginBottom: '24px' }}>
          <ArticleListCard article={article} />
        </div>
      ))}
    </>
  );
};

export default ArticleList;
