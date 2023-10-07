import { IArticle } from '@/models/article';
import React, { FC } from 'react';

interface ArticleCardProps {
  article: IArticle;
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  return (
    <>
      <div>ArticleCard</div>
      <div>{article.title}</div>
    </>
  );
};

export default ArticleCard;
