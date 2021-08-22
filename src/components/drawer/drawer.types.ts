import { ReactNode } from 'react';

type Position = 'fixed' | 'absolute' | 'relative';

type Location = 'left' | 'right' | 'top' | 'bottom';

type ToggleLocation = 'top' | 'bottom' | 'left' | 'right' | 'center';

export interface Props extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  ruler?: boolean;
  drawer?: {
    position?: Position;
    location?: Location;
    hidden?: boolean;
    size?: number;
  };
  toggle?: {
    toggle?: boolean;
    children?: ReactNode;
    location?: ToggleLocation;
    position?: Position;
  };
}
