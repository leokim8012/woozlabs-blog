'use client';

import { IArticle } from '@/models/article';
import { Card, Image, Typography } from '@woozdesign/ui';
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
      <Image src={article.thumbnailUrl} alt="" width={'100%'} height={320} radius={'large'} />
      <Card.Heading
        title={
          <Typography.Heading variant="h2" size={5} className={styles['article-title']} color={'violet'}>
            {article.title}
          </Typography.Heading>
        }
        subtitle={article.subtitle}
        outlined={false}
      />
      <Card.Actions outlined={false}>
        <Typography.Text color={'gray'} highContrast={false}>
          {article.updatedAt.toDateString()}
        </Typography.Text>
      </Card.Actions>
    </Card>
  );
};

export default ArticleListCard;
