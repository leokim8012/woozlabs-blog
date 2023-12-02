'use client';

import { IArticle } from '@/models/article';
import { AspectRatio, Card, Image, Typography } from '@woozdesign/ui';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import styles from './ArticleListCard.module.scss';

interface ArticleListCardProps {
  article: IArticle;
}

const ArticleListCard: FC<ArticleListCardProps> = ({ article }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/article/${article.id}`);
  };

  return (
    <Card className={styles['article']} variant={'transparent'} outlined={false} onClick={handleClick}>
      <AspectRatio ratio={16 / 9}>
        <Image src={article.thumbnailUrl} alt="" width={'100%'} height={'100%'} radius={'large'} />
      </AspectRatio>
      <Card.Header
        title={
          <Typography.Header variant="h2" className={styles['article-title']} color={'violet'}>
            {article.title}
          </Typography.Header>
        }
        subtitle={article.subtitle}
        outlined={false}
      />
      <Card.Action outlined={false}>
        <Typography.Text color={'gray'} highContrast={false}>
          {article.updatedAt.toDateString()}
        </Typography.Text>
      </Card.Action>
    </Card>
  );
};

export default ArticleListCard;
