import { FC } from 'react';
import cn from 'classnames';
import { Props } from './cssGrid.types';
import styles from './cssGrid.module.scss';
import { GridTempStyle } from './GridTemplateAreas';

export const CssGrid: FC<Props> = ({
  children,
  container,
  template,
  ruler,
  xGap,
  yGap,
  gap,
  col,
  xs,
  sm,
  md,
  lg,
  xl,
  width,
  item,
  area,
  gridTemplate,
  gridXS,
  gridSM,
  gridMD,
  gridLG,
  gridXL,
  ...props
}) => {
  const classNames = cn({
    [styles.GridContainer]: container,
    [styles.GridItem]: item,
    [styles[`GridTemplate-${template}`]]: template,
    [styles.GridRuler]: ruler,
    [styles[`GridXGap-${xGap}`]]: xGap,
    [styles[`GridYGap-${yGap}`]]: yGap,
    [styles[`GridGap-${gap}`]]: gap,
    [styles[`Grid-xs-${col}`]]: col,
    [styles[`Grid-xs-${xs}`]]: xs,
    [styles[`Grid-sm-${sm}`]]: sm,
    [styles[`Grid-md-${md}`]]: md,
    [styles[`Grid-lg-${lg}`]]: lg,
    [styles[`Grid-xl-${xl}`]]: xl,
    [styles[`GridWidth-${width}`]]: width,
    [styles[`GridArea-${area}`]]: area,
  });

  const GridTemplate = gridTemplate
    ? GridTempStyle(gridXS, gridSM, gridMD, gridLG, gridXL)
    : {};

  return (
    <div
      className={classNames}
      {...props}
      style={{ ...props.style, ...GridTemplate }}
    >
      {children}
    </div>
  );
};
