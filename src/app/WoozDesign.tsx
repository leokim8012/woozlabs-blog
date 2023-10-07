'use client';

import React from 'react';
import { Theme } from '@woozdesign/ui';

export const RootStyleRegistry = ({ children }: React.PropsWithChildren) => {
  return <Theme.ThemeProvider accentColor={'violet'}>{children}</Theme.ThemeProvider>;
};
