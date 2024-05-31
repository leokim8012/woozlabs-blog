'use client';

import { ARTICLES, IArticle } from '@/models/article';
import React, { FC } from 'react';

import { Col, Container, Layout, Row, Typography } from '@woozdesign/ui';
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
      <Container style={{ marginTop: 64 }}>
        <Row style={{ maxWidth: '1280px', margin: 'auto' }} gutter={['4', '4']}>
          <Col
            xs={0}
            sm={8}
            md={6}
            position={'sticky'}
            style={{
              top: '64px',
              position: 'sticky',
              overflowY: 'auto',
              textAlign: 'end',
            }}
          >
            <RecommendArticleList />
          </Col>
          <Col xs={24} sm={16} md={12}>
            <Typography.Text variant="p" highContrast={false}>
              Recent
            </Typography.Text>
            <ArticleList articles={ARTICLES} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ArchiveLayout;
