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
    <Card className={styles['article']} onClick={handleClick}>
      {/* <Image src={article.thumbnailUrl} alt="" width={'100%'} height={180} /> */}
      <Card.Heading
        title={
          <Typography.Text className={styles['article-card']} color={'violet'} size={4}>
            {article.title}
          </Typography.Text>
        }
        outlined={false}
      />
      <Card.Actions outlined={false}>
        <Typography.Text color={'gray'} size={3} highContrast={false}>
          {article.updatedAt.toDateString()}
        </Typography.Text>
      </Card.Actions>
    </Card>
  );
};

export default ArticleRecommendCard;
