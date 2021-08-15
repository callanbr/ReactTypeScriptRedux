import { FC, ReactNode, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './header.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  image?: string;
  size?: number;
  parallax?: boolean;
  parallaxTitle?: boolean;
  title?: string;
}

export const Header: FC<Props> = ({
  children,
  size,
  image,
  parallax,
  title,
  ...props
}) => {
  const [transform, setTransform] = useState('');

  const resetTransform = () => {
    const pageYOffset = window.pageYOffset;
    const rate = Math.round(pageYOffset * 0.5); // negative for reverse
    setTransform('translate3d(0,' + rate + 'px,0)');
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform);
      }
    };
  });

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
