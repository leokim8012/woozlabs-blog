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
      <Layout.Col xs={12} style={{ paddingLeft: 0 }}>
        <Button variant={'secondary'} onClick={onShareClick} size={'large'} iconPrepend={<Icon type={'Mail'} />}>
          Share
        </Button>
      </Layout.Col>

      <Layout.Col xs={12} style={{ paddingRight: 0, textAlign: 'end' }}>
        <Button variant={'secondary'} href={`mailto:woozlabs.official@gmail.com?subject=[${article?.title ?? 'WoozLabs'}]`} size={'large'} iconPrepend={<Icon type={'Mail'} />}>
          Feedback
        </Button>
      </Layout.Col>

      <Layout.Col xs={12} style={{ paddingLeft: 0 }}>
        {olderArticle && (
          <Card
            style={{
              height: '100%',
              maxWidth: '300px',
              textAlign: 'start',
              marginRight: 'auto',
              cursor: 'pointer',
            }}
            onClick={() => routerPush(olderArticle.id)}
          >
            <Card.Heading title={olderArticle.title} subtitle={'Older Article'} outlined={false}></Card.Heading>
          </Card>
        )}
      </Layout.Col>

      <Layout.Col xs={12} style={{ paddingRight: 0 }}>
        {nextArticle && (
          <Card
            style={{
              height: '100%',
              maxWidth: '300px',
              textAlign: 'end',
              marginLeft: 'auto',
              cursor: 'pointer',
            }}
            onClick={() => routerPush(nextArticle.id)}
          >
            <Card.Heading title={nextArticle.title} subtitle={'Newer Article'} outlined={false}></Card.Heading>
          </Card>
        )}
      </Layout.Col>
    </Layout.Row>
  );
};

export default ArticleFooter;
