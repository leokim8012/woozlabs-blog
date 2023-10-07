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

const Error = () => {
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
        <Typography.Heading>Error</Typography.Heading>
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

export default Error;
