import { IArticle } from '@/models/article';
import { Icon } from '@woozdesign/icons';
import { Button, Card, Col, Flex, Layout, Row, Typography, useToast } from '@woozdesign/ui';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface ArticleFooterProps {
  article?: IArticle | null;
  olderArticle?: IArticle | null;
  nextArticle?: IArticle | null;
}

const ArticleFooter: FC<ArticleFooterProps> = ({ article, nextArticle, olderArticle }) => {
  const router = useRouter();

  const [openToast, context] = useToast();

  const routerPush = (articleId: string) => {
    router.push(`/article/${articleId}`);
  };

  const onShareClick = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      openToast({
        message: 'The URL has been copied',
        color: 'grass',
        highContrast: true,
        placement: 'bottomRight',
      });
    } catch (e) {
      if (e instanceof Error) {
        openToast({
          message: 'Error occured',
          color: 'crimson',
          highContrast: true,
          placement: 'bottomRight',
        });
      }
    }
  };

  return (
    <Row style={{ marginBottom: '128px' }} gutter={['6', '6']}>
      {context}

      <Flex width={'100%'} justify="space-between" align="center" px={'4'}>
        <Button variant={'ghost'} onClick={onShareClick} size={'large'} iconPrepend={<Icon type={'Link'} />}>
          Share
        </Button>
        <Button variant={'ghost'} href={`mailto:woozlabs.official@gmail.com?subject=[${article?.title ?? 'WoozLabs'}]`} size={'large'} iconPrepend={<Icon type={'Mail'} />}>
          Feedback
        </Button>
      </Flex>

      <Col xs={12}>
        {olderArticle && (
          <Card variant={'translucent'} onClick={() => routerPush(olderArticle.id)}>
            <Card.Body
              title={
                <Typography.Text mb={'2'} variant="div" highContrast={false}>
                  Older Article
                </Typography.Text>
              }
              content={
                <Typography.Header variant={'h4'} size={'3'} align={'start'}>
                  {olderArticle.title}
                </Typography.Header>
              }
            ></Card.Body>
          </Card>
        )}
      </Col>

      <Col xs={12} style={{ paddingRight: 0 }}>
        {nextArticle && (
          <Card variant={'translucent'} onClick={() => routerPush(nextArticle.id)}>
            <Card.Body
              title={
                <Typography.Text mb={'2'} variant="div" align="end" highContrast={false}>
                  Newer Article
                </Typography.Text>
              }
              content={
                <Typography.Header variant={'h3'} size={'3'} align={'end'}>
                  {nextArticle.title}
                </Typography.Header>
              }
            ></Card.Body>
          </Card>
        )}
      </Col>
    </Row>
  );
};

export default ArticleFooter;
