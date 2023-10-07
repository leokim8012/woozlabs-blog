import React, { FC } from 'react';

import styles from './SpinLoader.module.scss';
interface SpinLoaderProps {}

const SpinLoader: FC<SpinLoaderProps> = ({}) => {
  return <span className={styles.loader} />;
};

export default SpinLoader;
