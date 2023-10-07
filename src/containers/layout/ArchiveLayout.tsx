'use client';

import { ARTICLES, IArticle } from '@/models/article';
import React, { FC } from 'react';

import { Layout, Typography } from '@woozdesign/ui';
import RecommendArticleList from '../list/RecommendArticleList';
import ArticleList from '../list/ArticleList';

const contentStyle: React.CSSProperties = {};

interface ArchiveLayoutProps {
  articles: IArticle[];
}

const ArchiveLayout: FC<ArchiveLayoutProps> = ({ articles }) => {
  return (
    <Layout.Container>
      <Layout.Row style={{ maxWidth: '1280px', margin: 'auto' }} gutter={[32, 32]}>
        <Layout.Col
          xs={0}
          sm={8}
          md={6}
          style={{
            top: '0',
            position: 'sticky',
            overflowY: 'auto',
            height: 'calc(100vh - 64px )',
            textAlign: 'end',
          }}
        >
          <Typography.Subtitle level={5}>Recommend</Typography.Subtitle>
          <RecommendArticleList />
        </Layout.Col>
        <Layout.Col xs={24} sm={16} md={12}>
          <Typography.Subtitle level={5}>Recent</Typography.Subtitle>
          <ArticleList articles={ARTICLES} />
        </Layout.Col>
      </Layout.Row>
    </Layout.Container>
  );
};

export default ArchiveLayout;
