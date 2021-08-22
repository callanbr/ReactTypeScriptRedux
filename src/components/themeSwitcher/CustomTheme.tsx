import { useEffect, useState } from 'react';
import { Drawer, Grid } from '..';
import { HexToRgb, RgbToHex } from '../../helpers';
import styles from './custom.module.scss';

// Create slice for custom theme.
// Own slice or added to themeSlice?

const ThemeOptions = ['background', 'container', 'text'];
const root = document.documentElement;

// Create functions to get and set css PropertyValues?
// If so - save in helpers for use in other components

export const CustomTheme = () => {
  useEffect(() => {
    const colorInputElement: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(`.${styles.inputColor}`);

    // loop through all color inputs from ThemeOptions (background, container, text)
    for (let colorIdx = 0; colorIdx < colorInputElement.length; colorIdx++) {
      const colorItem: HTMLInputElement = colorInputElement[colorIdx];

      const storedBackground = JSON.parse(
        localStorage.getItem(`${colorItem.name}`)
      );

      // Set variables to colors stored in localStorage if exists
      if (storedBackground) {
        // const root = document.documentElement;
        root.style.setProperty(
          '--' + colorItem.name + '-red',
          storedBackground.red
        );
        root.style.setProperty(
          '--' + colorItem.name + '-green',
          storedBackground.green
        );
        root.style.setProperty(
          '--' + colorItem.name + '-blue',
          storedBackground.blue
        );
      }
      // Set colorInput values to rgb of css variables
      const initialRed = getComputedStyle(document.body).getPropertyValue(
        '--' + colorItem.name + '-red'
      );
      const initialGreen = getComputedStyle(document.body).getPropertyValue(
        '--' + colorItem.name + '-green'
      );
      const initialBlue = getComputedStyle(document.body).getPropertyValue(
        '--' + colorItem.name + '-blue'
      );
      // CSS variable are stored individually as red, green, and blue.
      // Input type of color expects a hex value.
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

  // Change css variable for session and save values to localStorage for next session
  const changeCSSColorVariables = (e) => {
    const rgb = HexToRgb(e.target.value);
    // const root = document.documentElement;
    root.style.setProperty('--' + e.target.name + '-red', rgb.red);
    root.style.setProperty('--' + e.target.name + '-green', rgb.green);
    root.style.setProperty('--' + e.target.name + '-blue', rgb.blue);
    localStorage.setItem(e.target.name, JSON.stringify(rgb));
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
                  onChange={(e) => changeCSSColorVariables(e)}
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
