'use client';

import { Flex, IconButton, Image, AppBar as WoozAppBar } from '@woozdesign/ui';
import { FC } from 'react';
import styles from './AppBar.module.scss';
import App from 'next/app';
import { Icon } from '@woozdesign/icons';

interface AppBarProps {}

const AppBar: FC<AppBarProps> = ({}) => {
  return (
    <div style={{ zIndex: 9999 }}>
      <WoozAppBar position={'fixed'} variant={'translucent'}>
        <WoozAppBar.Header>
          <a href="/">
            <h1>
              <Image width={98} alt="Wooz Blog" src="/assets/icons/logo.svg" placeholder="/assets/icons/logo.svg"></Image>
            </h1>
          </a>
        </WoozAppBar.Header>
        <WoozAppBar.Action>
          <Flex align="center">
            <IconButton href="https://github.com/leokim8012" variant={'transparent'} color={'gray'} highContrast>
              <Icon type={'Github'} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/leokim8012" variant={'transparent'} color={'gray'} highContrast>
              <Icon type={'Linkedin2'} />
            </IconButton>
            <IconButton href="https://instagram.com/rhksdnrla" variant={'transparent'} color={'gray'} highContrast>
              <Icon type={'Instagram'} />
            </IconButton>
          </Flex>
        </WoozAppBar.Action>
      </WoozAppBar>
    </div>
  );
};

export default AppBar;
