import { FC, ReactNode } from 'react';
import styles from './box.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Box: FC<Props> = ({ children, ...props }) => {
  return (
    <div className={styles.box} {...props}>
      {children}
    </div>
  );
};
