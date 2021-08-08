import { FC } from 'react';
import cn from 'classnames';
import { Props } from './flexGrid.types';
import styles from './flexGrid.module.scss';

export const FlexGrid: FC<Props> = ({
  children,
  container,
  raised,
  fullWidth,
  item,
  ruler,
  col,
  xs,
  sm,
  md,
  lg,
  xl,
  spacing,
  justifyContent,
  alignItems,
  alignSelf,
  ...props
}) => {
  const classNames = cn({
    [styles.GridContainer]: container,
    [styles.GridRaised]: raised,
    [styles.GridFullWidth]: fullWidth,
    [styles.GridItem]: item,
    [styles.GridRuler]: ruler,
    [styles[`Grid-xs-${col}`]]: col,
    [styles[`Grid-xs-${xs}`]]: xs,
    [styles[`Grid-sm-${sm}`]]: sm,
    [styles[`Grid-md-${md}`]]: md,
    [styles[`Grid-lg-${lg}`]]: lg,
    [styles[`Grid-xl-${xl}`]]: xl,
    [styles[`GridSpacing-${spacing}`]]: spacing,
    [styles[`GridJustifyContent-${justifyContent}`]]: justifyContent,
    [styles[`GridAlignItems-${alignItems}`]]: alignItems,
    [styles[`GridAlignSelf-${alignSelf}`]]: alignSelf,
  });
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};
