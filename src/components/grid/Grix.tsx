import { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './grid.module.scss';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around';

type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  xl?: Cols;
  spacing?: Spacing;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
}

export const Grid: FC<Props> = ({
  children,
  container,
  item,
  xs,
  sm,
  md,
  lg,
  xl,
  spacing,
  justifyContent,
  alignItems,
  ...props
}) => {
  const classNames = cn({
    [styles.GridContainer]: container,
    [styles.GridItem]: item,
    [styles[`Grid-xs-${xs}`]]: xs,
    [styles[`Grid-sm-${sm}`]]: sm,
    [styles[`Grid-md-${md}`]]: md,
    [styles[`Grid-lg-${lg}`]]: lg,
    [styles[`Grid-xl-${xl}`]]: xl,
    [styles[`GridSpacing-${spacing}`]]: spacing,
    [styles[`GridJustifyContent-${justifyContent}`]]: justifyContent,
    [styles[`GridAlignItems-${alignItems}`]]: alignItems,
  });
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};
