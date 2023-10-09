'use client';

import { Button, Image, AppBar as WoozAppBar } from '@woozdesign/ui';
import { FC } from 'react';
import styles from './AppBar.module.scss';
import App from 'next/app';
import { Icon } from '@woozdesign/icons';

interface AppBarProps {}

const AppBar: FC<AppBarProps> = ({}) => {
  return (
    <div style={{ zIndex: 9999 }}>
      <WoozAppBar position={'fixed'} variant={'transparent'}>
        <WoozAppBar.Heading>
          <a href="/">
            <Image width={120} alt="Wooz Blog" src="/assets/icons/logo.svg" placeholder="/assets/icons/logo.svg"></Image>
          </a>
        </WoozAppBar.Heading>
        <WoozAppBar.Body></WoozAppBar.Body>
        <WoozAppBar.Action>
          <Button href="https://github.com/william8012" variant={'icon'} highContrast radius={'large'}>
            <Icon type={'Github'} />
          </Button>
          <Button href="https://www.linkedin.com/in/leo8012" variant={'icon'} highContrast radius={'large'}>
            <Icon type={'Linkedin'} />
          </Button>
          <Button href="https://instagram.com/rhksdnrla" variant={'icon'} highContrast radius={'large'}>
            <Icon type={'Instagram'} />
          </Button>
        </WoozAppBar.Action>
      </WoozAppBar>
    </div>
  );
};

export default AppBar;
