import { ReactNode } from 'react';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Spacing = 'col' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around';

type Align = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  container?: boolean;
  raised?: boolean;
  fullWidth?: boolean;
  item?: boolean;
  ruler?: boolean;
  col?: Cols;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  xl?: Cols;
  spacing?: Spacing;
  justifyContent?: JustifyContent;
  alignItems?: Align;
  alignSelf?: Align;
}
