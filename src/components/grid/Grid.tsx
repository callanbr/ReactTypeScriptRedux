import { FC } from 'react';
import cn from 'classnames';
import { Props } from './grid.types';
import styles from './grid.module.scss';
import { GridTempStyle } from './GridTemplateAreas';
import { Link } from 'react-router-dom';

export const Grid: FC<Props> = ({
  children,
  container,
  breakpoint,
  clickType,
  raised,
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
    [styles.GridBreakpoint]: breakpoint,
    [styles.GridRaisedHover]: clickType,
    [styles.GridRaised]: raised,
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

  const ElementToRender =
    clickType === 'button'
      ? 'button'
      : clickType === 'routerLink'
      ? Link
      : clickType === 'link'
      ? 'a'
      : 'div';

  return (
    <ElementToRender
      className={classNames}
      {...props}
      style={{ ...props.style, ...GridTemplate }}
    >
      {children}
    </ElementToRender>
  );
};
