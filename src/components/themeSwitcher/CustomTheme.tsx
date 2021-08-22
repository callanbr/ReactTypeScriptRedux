import { ChangeEvent, useEffect } from 'react';
import { Drawer, Grid } from '..';
import { useRootDispatch, useRootState } from '../../redux/hooks';
import {
  changeCustomTheme,
  customTheme,
  CustomThemeOptions,
} from '../../redux/features/themeSlice';
import styles from './custom.module.scss';

export const CustomTheme = () => {
  const dispatch = useRootDispatch();
  const rootTheme = useRootState((state) => state.themeChanger.initialHex);

  useEffect(() => {
    const colorInputElement: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(`.${styles.inputColor}`);

    for (let colorIdx = 0; colorIdx < colorInputElement.length; colorIdx++) {
      const colorItem: HTMLInputElement = colorInputElement[colorIdx];

      const setToStored = (colorItem: HTMLInputElement) =>
        dispatch(
          customTheme({
            name: colorItem.name,
            value: colorItem.value,
          })
        );
      setToStored(colorItem);
    }
  }, [dispatch]);

  const ToggleButton = (
    <Grid container style={{ marginRight: '-35px' }}>
      <Grid clickType="hover" style={{ paddingRight: '20px' }}>
        Custom
      </Grid>
    </Grid>
  );

  const changeCSSColorVariables = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeCustomTheme({ name: e.target.name, value: e.target.value }));

  return (
    <>
      <Drawer
        drawer={{
          position: 'fixed',
          location: 'right',
          hidden: true,
          size: 300,
        }}
        toggle={{
          children: ToggleButton,
          location: 'top',
          position: 'fixed',
        }}
      >
        <div className={styles.controls}>
          {CustomThemeOptions.map((theme, idx) => (
            <div key={idx}>
              <h3 className={`${[styles[`${theme}`]]}`}>
                <input
                  name={`${theme}`}
                  className={styles.inputColor}
                  type="color"
                  onChange={(e) => changeCSSColorVariables(e)}
                  value={`${rootTheme[theme]}`}
                />
                {theme}
              </h3>
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};
