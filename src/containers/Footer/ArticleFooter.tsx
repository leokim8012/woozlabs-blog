import { IArticle } from '@/models/article';
import { Icon } from '@woozdesign/icons';
import { Button, Card, Layout, Typography } from '@woozdesign/ui';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface ArticleFooterProps {
  article?: IArticle | null;
  olderArticle?: IArticle | null;
  nextArticle?: IArticle | null;
}

const ArticleFooter: FC<ArticleFooterProps> = ({ article, nextArticle, olderArticle }) => {
  const router = useRouter();

  const routerPush = (articleId: string) => {
    router.push(`/article/${articleId}`);
  };

  const onShareClick = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      // messageApi.open({
      //   type: 'success',
      //   content: 'The URL has been copied.',
      // });
    } catch (e) {
      if (e instanceof Error) {
        // messageApi.open({
        //   type: 'error',
        //   content: (e as Error).message,
        // });
      }
    }
  };
  return (
    <Layout.Row style={{ marginBottom: '128px' }} gutter={[32, 32]}>
      <Layout.Col xs={12}>
        <Button variant={'secondary'} onClick={onShareClick} size={'large'} iconPrepend={<Icon type={'Link'} />}>
          Share
        </Button>
      </Layout.Col>

      <Layout.Col xs={12} style={{ paddingRight: 0, textAlign: 'end' }}>
        <Button variant={'secondary'} href={`mailto:woozlabs.official@gmail.com?subject=[${article?.title ?? 'WoozLabs'}]`} size={'large'} iconPrepend={<Icon type={'Mail'} />}>
          Feedback
        </Button>
      </Layout.Col>

      <Layout.Col xs={12}>
        {olderArticle && (
          <Card onClick={() => routerPush(olderArticle.id)}>
            <Card.Body
              title={
                <Typography.Text style={{ textAlign: 'start', marginBottom: 'var(--space-2)' }} variant="div" size={3} highContrast={false}>
                  Older Article
                </Typography.Text>
              }
              content={
                <Typography.Heading align={'start'} size={4}>
                  {olderArticle.title}
                </Typography.Heading>
              }
            ></Card.Body>
          </Card>
        )}
      </Layout.Col>

      <Layout.Col xs={12} style={{ paddingRight: 0 }}>
        {nextArticle && (
          <Card onClick={() => routerPush(nextArticle.id)}>
            <Card.Body
              title={
                <Typography.Text style={{ textAlign: 'end', marginBottom: 'var(--space-2)' }} variant="div" size={3} highContrast={false}>
                  Newer Article
                </Typography.Text>
              }
              content={
                <Typography.Heading align={'end'} size={4}>
                  {nextArticle.title}
                </Typography.Heading>
              }
            ></Card.Body>
          </Card>
        )}
      </Layout.Col>
    </Layout.Row>
  );
};

export default ArticleFooter;
