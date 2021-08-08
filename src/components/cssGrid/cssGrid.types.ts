import { ReactNode } from 'react';

type Template = string;

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  container?: boolean;
  template?: Template;
  ruler?: boolean;
  xGap?: string;
  yGap?: string;
  gap?: string;
}
