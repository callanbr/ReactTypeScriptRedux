import { FC } from 'react';
import cn from 'classnames';
import { Props } from './cssGrid.types';
import styles from './cssGrid.module.scss';

export const CssGrid: FC<Props> = ({
  children,
  container,
  template,
  ruler,
  xGap,
  yGap,
  gap,
  ...props
}) => {
  const classNames = cn({
    [styles.GridContainer]: container,
    [styles[`GridTemplate-${template}`]]: template,
    [styles.GridRuler]: ruler,
    [styles[`GridXGap-${xGap}`]]: xGap,
    [styles[`GridYGap-${yGap}`]]: yGap,
    [styles[`GridGap-${gap}`]]: gap,
  });
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};
