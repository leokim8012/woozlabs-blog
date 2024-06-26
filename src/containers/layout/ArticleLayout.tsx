'use client';
// External Libraries
import React, { FC, useEffect, useState } from 'react';

// Models
import { IArticle } from '@/models/article';
import { ExtendedRecordMap } from 'notion-types';

// Components
// import NavigationBar from '@/components/navbar/NavigationBar';
import RecommendArticleList from '@/containers/list/RecommendArticleList';

// Utils
import { useRouter } from 'next/navigation';

// Styles
import { Anchor, Col, Container, Divider, Layout, Row, Typography } from '@woozdesign/ui';
import Image from 'next/image';
import { NotionRenderer } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code';
import { Equation } from 'react-notion-x/build/third-party/equation';
import AppBar from '../AppBar/AppBar';
import ArticleFooter from '../Footer/ArticleFooter';
import Footer from '../Footer/Footer';
import styles from './ArticleLayout.module.scss';

const FEEDBACK_EMAIL = 'woozlabs.official@gmail.com';
const contentStyle: React.CSSProperties = {};
const siderStyle = (top: string): React.CSSProperties => ({
  top: top,
  position: 'sticky',
});

interface ArticleLayoutProps {
  article: IArticle;
  nextArticle: IArticle | null;
  olderArticle: IArticle | null;
  recordMap: ExtendedRecordMap;
}

const ArticleLayout: FC<ArticleLayoutProps> = ({ article, recordMap, nextArticle, olderArticle }) => {
  const [anchorItems, setAnchorItems] = useState<
    {
      key: string;
      href: string;
      title: string;
    }[]
  >([]);
  const [topOffset, setTopOffset] = useState<number>(128);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const titleElements = Array.from(document.getElementsByTagName('h2'));
    const items = titleElements.map((titleElement, index) => {
      const id = `${titleElement.getAttribute('data-id')}`;
      titleElement.id = id;

      return {
        key: id,
        href: `#${id}`,
        title: titleElement.innerText,
      };
    });

    setAnchorItems(items);
  }, [recordMap, isLoaded]);

  // const [messageApi, contextHolder] = message.useMessage();

  const routerPush = (articleId: string) => {
    router.push(`/article/${articleId}`);
  };

  useEffect(() => {
    if (document.getElementsByClassName('notion-title')[0]) document.getElementsByClassName('notion-title')[0].remove();
  });

  return (
    <>
      <AppBar />
      <Container style={{ overflowX: 'clip' }}>
        <Row gutter={['6', '6']}>
          <Col xs={0} sm={0} md={6} className={styles.sider} style={{ ...siderStyle('128px'), textAlign: 'end' }}>
            <RecommendArticleList />
          </Col>
          <Col xs={24} sm={16} md={12}>
            <article style={{ marginTop: '64px', overflow: 'hidden' }}>
              <Typography.Header size={'9'}>{article.title}</Typography.Header>
              <Typography.Text>
                {article.author} · {article.updatedAt.toDateString()}
              </Typography.Text>
              <Divider color="gray" my={'5'} />
              <NotionRenderer recordMap={recordMap} fullPage={true} pageTitle={false} darkMode={true} components={{ Equation, Code, nextImage: Image }} disableHeader={true} />
            </article>
            <ArticleFooter article={article} nextArticle={nextArticle} olderArticle={olderArticle} />
          </Col>

          <Col xs={0} sm={8} md={6} className={styles.sider} style={siderStyle('180px')}>
            {isLoaded ? <Anchor items={anchorItems} offset={topOffset} /> : null}
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default ArticleLayout;
