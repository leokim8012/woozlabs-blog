'use client';

import { Metadata } from 'next';
import { useRouter } from 'next/navigation';

import { Button, Layout, Typography } from '@woozdesign/ui';
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'WoozBlog | 404',
    description: 'Not Found',
  };
};

const NotFound = () => {
  const router = useRouter();
  return (
    <Layout.Container style={{ height: '100vh' }}>
      <div
        style={{
          textAlign: 'center',
          height: '100%',
          display: 'flex',
          gap: 'var(--space-4)',
          alignItems: 'center',
          placeContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography.Heading>Not Found</Typography.Heading>
        <Button variant={'soft'} href="/">
          Return Home
        </Button>

        {/* <Button
          type={'solid'}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button> */}
      </div>
    </Layout.Container>
  );
};

export default NotFound;
