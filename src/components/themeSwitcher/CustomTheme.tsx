import { useEffect, useState } from 'react';
import { Drawer, Grid } from '..';
import { HexToRgb, RgbToHex } from '../../helpers';
import styles from './custom.module.scss';

const ThemeOptions = ['background', 'container', 'text'];

export const CustomTheme = () => {
  const [themeHex, setThemeHex] = useState({});

  // useEffect(() => {
  //   const colorElement: NodeListOf<HTMLInputElement> =
  //     document.querySelectorAll(`.${styles.inputColor}`);

  //   for (let colorIdx = 0; colorIdx < colorElement.length; colorIdx++) {
  //     const colorItem: HTMLInputElement = colorElement[colorIdx];

  //     if (colorItem !== null) {
  //       colorElement[0].defaultValue = themeHex.background;
  //       colorElement[1].defaultValue = themeHex.container;
  //       colorElement[2].defaultValue = themeHex.text;
  //     }
  //   }
  // }, [themeHex]);

  // useEffect(() => {
  //   const computedStyles = getComputedStyle(document.body);
  //   const root = document.documentElement;
  //   const rangeElement: NodeListOf<HTMLInputElement> =
  //     document.querySelectorAll(`.${styles.range}`);

  //   //set rgb for background, container, and text to theme state
  //   const functionToSetTheme = () => {
  //     setThemeHex({
  //       background: RgbToHex(
  //         parseInt(rangeElement[0].value),
  //         parseInt(rangeElement[1].value),
  //         parseInt(rangeElement[2].value)
  //       ),
  //       container: RgbToHex(
  //         parseInt(rangeElement[3].value),
  //         parseInt(rangeElement[4].value),
  //         parseInt(rangeElement[5].value)
  //       ),
  //       text: RgbToHex(
  //         parseInt(rangeElement[6].value),
  //         parseInt(rangeElement[7].value),
  //         parseInt(rangeElement[8].value)
  //       ),
  //     });
  //   };

  //   //set rgb sliders to themeHex value if changed
  //   const inputColorChange = () => {
  //     const bg = HexToRgb(themeHex.background);
  //     const c = HexToRgb(themeHex.container);
  //     const t = HexToRgb(themeHex.text);

  //     function getKeyByValue(object, value) {
  //       return Object.keys(object).find((key) => object[key] === value);
  //     }

  //     if (!bg) {
  //       return;
  //     } else {
  //       root.style.setProperty('--background-red', bg['red']);
  //       root.style.setProperty('--background-green', bg['green']);
  //       root.style.setProperty('--background-blue', bg['blue']);
  //     }

  //     if (!c) {
  //       return;
  //     } else {
  //       root.style.setProperty('--container-red', c['red']);
  //       root.style.setProperty('--container-green', c['green']);
  //       root.style.setProperty('--container-blue', c['blue']);
  //     }
  //     if (!t) {
  //       return;
  //     } else {
  //       root.style.setProperty('--text-red', t['red']);
  //       root.style.setProperty('--text-green', t['green']);
  //       root.style.setProperty('--text-blue', t['blue']);
  //     }
  //   };

  //   for (let rangeIdx = 0; rangeIdx < rangeElement.length; rangeIdx++) {
  //     const rangeItem: HTMLInputElement = rangeElement[rangeIdx];
  //     const initialRangeValue = parseInt(
  //       getComputedStyle(document.body).getPropertyValue('--' + rangeItem.name)
  //     );
  //     rangeItem.value = `${initialRangeValue}`;

  //     rangeItem.addEventListener('input', function (this: HTMLInputElement) {
  //       root.style.setProperty('--' + this.name, this.value);
  //       rangeElement[rangeIdx].value = `${this.value}`;
  //     });

  //     // functionToSetTheme();

  //     inputColorChange();
  //   }
  // }, [themeHex.background, themeHex.container, themeHex.text]); //themeHex.background, themeHex.container, themeHex.text

  useEffect(() => {
    const colorElement: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(`.${styles.inputColor}`);

    for (let colorIdx = 0; colorIdx < colorElement.length; colorIdx++) {
      const colorItem: HTMLInputElement = colorElement[colorIdx];
      const initialRed = getComputedStyle(document.body).getPropertyValue(
        '--' + colorItem.name + '-red'
      );
      const initialGreen = getComputedStyle(document.body).getPropertyValue(
        '--' + colorItem.name + '-green'
      );
      const initialBlue = getComputedStyle(document.body).getPropertyValue(
        '--' + colorItem.name + '-blue'
      );

      const initialHex = RgbToHex(
        parseInt(initialRed),
        parseInt(initialGreen),
        parseInt(initialBlue)
      );
      colorItem.value = `${initialHex}`;
    }
  }, []);

  const ToggleButton = (
    <Grid container style={{ marginRight: '-35px' }}>
      <Grid clickType="hover" style={{ paddingRight: '20px' }}>
        Custom
      </Grid>
    </Grid>
  );

  const changeRangeFromDefaultValue = (e) => {
    const rgb = HexToRgb(e.target.value);
    const root = document.documentElement;
    root.style.setProperty('--' + e.target.name + '-red', rgb.red);
    root.style.setProperty('--' + e.target.name + '-green', rgb.green);
    root.style.setProperty('--' + e.target.name + '-blue', rgb.blue);
  };

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
          {ThemeOptions.map((theme, idx) => (
            <div key={idx}>
              <h3 className={`${[styles[`${theme}`]]}`}>
                <input
                  name={`${theme}`}
                  className={styles.inputColor}
                  type="color"
                  onChange={(e) => changeRangeFromDefaultValue(e)}
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
