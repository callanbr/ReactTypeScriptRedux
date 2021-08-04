import { FC, ReactNode } from 'react';
import styles from './box.module.scss';

interface Props {
  children?: ReactNode;
}

export const Box: FC<Props> = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};
