'use client';

import { IArticle } from '@/models/article';
import { Card, Image, Typography } from '@woozdesign/ui';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import styles from './ArticleRecommendCard.module.scss';

interface ArticleRecommendCardProps {
  article: IArticle;
}

const ArticleRecommendCard: FC<ArticleRecommendCardProps> = ({ article }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/article/${article.id}`);
  };

  return (
    <Card className={styles['article']} variant={'transparent'} outlined={false} onClick={handleClick}>
      <Card.Body
        title={
          <Typography.Text className={styles['article-card']} color={'violet'}>
            {article.title}
          </Typography.Text>
        }
        content={
          <Typography.Text variant="p" color={'gray'} align="end" highContrast={false}>
            {article.updatedAt.toDateString()}
          </Typography.Text>
        }
      />
    </Card>
  );
};

export default ArticleRecommendCard;
