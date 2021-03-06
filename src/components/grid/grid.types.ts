import { ReactNode } from 'react';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Spacing = 'col' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ClickType = 'button' | 'link' | 'routerLink' | 'hover';

export type gridTemplate = Array<Array<number>> | undefined;

export interface Props extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  container?: boolean;
  breakpoint?: boolean;
  raised?: boolean;
  clickType?: ClickType;
  to?: string;
  href?: string;
  target?: string;
  item?: boolean;
  template?: string;
  ruler?: boolean;
  xGap?: Spacing;
  yGap?: Spacing;
  gap?: Spacing;
  col?: Cols;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  xl?: Cols;
  width?: number;
  area?: Cols;
  gridTemplate?: boolean;
  gridXS?: gridTemplate;
  gridSM?: gridTemplate;
  gridMD?: gridTemplate;
  gridLG?: gridTemplate;
  gridXL?: gridTemplate;
}
