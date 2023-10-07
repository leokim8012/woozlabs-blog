import { Typography } from '@woozdesign/ui';
import React, { FC } from 'react';
import styles from './Footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.content}>
        <Typography.Text highContrast={false}>© 2023 Wooz Labs.</Typography.Text>
      </div>
    </footer>
  );
};

export default Footer;
