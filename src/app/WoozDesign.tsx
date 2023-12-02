'use client';

import React from 'react';
import { ThemeProvider } from '@woozdesign/ui';

export const RootStyleRegistry = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider appearance={'dark'} accentColor={'violet'}>
      {children}
    </ThemeProvider>
  );
};
