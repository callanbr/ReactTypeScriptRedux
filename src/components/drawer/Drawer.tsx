import { FC, useState } from 'react';
import { Props } from './drawer.types';
import cn from 'classnames';
import styles from './drawer.module.scss';

export const Drawer: FC<Props> = ({
  children,
  ruler,
  drawer,
  toggle,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const classNames = cn({
    [styles.Drawer]: true,
    [styles.DrawerRuler]: ruler,
    [styles[`DrawerPosition-${drawer?.position}`]]: drawer?.position,
    [styles[`DrawerLocation-${drawer?.location}`]]: drawer?.location,
    [styles[`DrawerHidden-${drawer?.location}`]]: drawer?.hidden,
    [styles[`DrawerSize-${drawer?.location}-${drawer?.size}`]]: drawer?.size,
    [styles.DrawerOpen]: isOpen,
  });
  const toggleClasses = cn({
    [styles.DrawerToggle]: toggle,
    [styles[`DrawerTogglePosition-${toggle?.position}`]]: toggle?.position,
    [styles[`DrawerToggleLocation-${drawer?.location}-${toggle?.location}`]]:
      toggle?.location,
    [styles[
      `DrawerOpenToggle-${drawer?.location}-${toggle?.location}-${drawer?.size}`
    ]]: isOpen,
  });

  const toggleDrawer = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  const ShowToggle = toggle ? (
    <span
      className={toggleClasses}
      role="button"
      tabIndex={-1}
      onKeyDown={toggleDrawer}
      onClick={toggleDrawer}
    >
      {toggle?.children}
    </span>
  ) : null;

  return (
    <>
      {ShowToggle}
      <div className={classNames} {...props} style={{ ...props.style }}>
        {children}
      </div>
    </>
  );
};
