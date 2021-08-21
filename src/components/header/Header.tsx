import { FC, ReactNode, useState } from 'react';
import cn from 'classnames';
import styles from './header.module.scss';
import { useEventListener, useWindowSize } from '../../hooks';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  image?: string;
  size?: number;
  parallax?: boolean;
  parallaxTitle?: boolean;
  title?: string;
  speed?: number;
}

export const Header: FC<Props> = ({
  children,
  size,
  image,
  parallax,
  title,
  speed = 0.1,
  ...props
}) => {
  const [transform, setTransform] = useState('');

  const windowWidth = useWindowSize().widthEM;

  const resetTransform = () => {
    const rate = Math.round(window.pageYOffset * speed);
    if (windowWidth >= 48) {
      setTransform('translate3d(0,' + rate + 'px,0)');
    }
  };
  useEventListener('scroll', resetTransform);

  const classNames = cn({
    [styles.Header]: true,
    [styles[`HeaderSize-${size}`]]: size,
    [styles.HeaderParallax]: parallax,
  });

  const ImageStyles = parallax
    ? {
        backgroundImage: 'url(' + image + ')',
        transform: transform,
      }
    : { backgroundImage: 'url(' + image + ')' };

  return (
    <header
      className={classNames}
      {...props}
      style={{ ...props.style, ...ImageStyles }}
    >
      <h1>{title}</h1>
      {children}
    </header>
  );
};
