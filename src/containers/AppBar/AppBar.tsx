'use client';

import { Image } from '@woozdesign/ui';
import { FC } from 'react';
import styles from './AppBar.module.scss';

interface AppBarProps {}

const AppBar: FC<AppBarProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <a href="/">
          <Image width={120} alt="Wooz Blog" src="/assets/icons/logo.svg" placeholder="/assets/icons/logo.svg"></Image>
        </a>
      </div>
    </div>
  );
};

export default AppBar;
