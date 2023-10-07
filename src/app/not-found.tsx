'use client';

import { Metadata } from 'next';
import { useRouter } from 'next/navigation';

import { Button, Layout, Typography } from '@woozdesign/ui';
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Hash | 404',
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
          alignItems: 'center',
          placeContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography.Title level={4}>Not Found</Typography.Title>
        <Button variant={'secondary'} href="/">
          Return Home
        </Button>

        {/* <Button
          type={'primary'}
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