'use client';
import React, { FC } from 'react';
import SpinLoader from '@/components/Common/SpinLoader';

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <div style={{ height: '100vh' }}>
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
        <SpinLoader />
      </div>
    </div>
  );
};

export default loading;
