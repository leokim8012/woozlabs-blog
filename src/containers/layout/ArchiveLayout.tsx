'use client';

import { ARTICLES, IArticle } from '@/models/article';
import React, { FC } from 'react';

import { Layout, Typography } from '@woozdesign/ui';
import AppBar from '../AppBar/AppBar';
import Footer from '../Footer/Footer';
import ArticleList from '../list/ArticleList';
import RecommendArticleList from '../list/RecommendArticleList';

const contentStyle: React.CSSProperties = {};

interface ArchiveLayoutProps {
  articles: IArticle[];
}

const ArchiveLayout: FC<ArchiveLayoutProps> = ({ articles }) => {
  return (
    <>
      <AppBar />
      <Layout.Container style={{ marginTop: 64 }}>
        <Layout.Row style={{ maxWidth: '1280px', margin: 'auto' }} gutter={[16, 16]}>
          <Layout.Col
            xs={0}
            sm={8}
            md={6}
            style={{
              top: '64px',
              position: 'sticky',
              overflowY: 'auto',
              textAlign: 'end',
            }}
          >
            <RecommendArticleList />
          </Layout.Col>
          <Layout.Col xs={24} sm={16} md={12}>
            <Typography.Text variant="p" highContrast={false}>
              Recent
            </Typography.Text>
            <ArticleList articles={ARTICLES} />
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
      <Footer />
    </>
  );
};

export default ArchiveLayout;
