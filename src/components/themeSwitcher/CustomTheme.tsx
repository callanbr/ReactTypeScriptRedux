// 'Background', 'Container', 'Text']
import { useEffect } from 'react';
import styles from './custom.module.scss';

const ThemeSliders = [
  {
    name: 'Background',
    red: 'background-red',
    green: 'background-green',
    blue: 'background-blue',
  },
  {
    name: 'Container',
    red: 'container-red',
    green: 'container-green',
    blue: 'container-blue',
  },
  { name: 'Text', red: 'text-red', green: 'text-green', blue: 'text-blue' },
];

const CustomTheme = () => {
  useEffect(() => {
    const computedStyles = getComputedStyle(document.body);
    const root = document.documentElement;
    const range = document.querySelectorAll(`.${styles.range}`);

    function setDataVal(element) {
      element.setAttribute('data-value', element.value);
    }

    for (let i = 0; i < range.length; i++) {
      const rangeItem = range[i];
      const initialRangeValue = parseInt(
        computedStyles.getPropertyValue('--' + rangeItem.name)
      );

      rangeItem.value = initialRangeValue;
      setDataVal(rangeItem);

      rangeItem.addEventListener('input', function () {
        root.style.setProperty('--' + this.name, this.value);
        setDataVal(this);
      });
    }

    const controls = document.querySelector(`.${styles.controlsWrap}`);
    const controlsToggle = document.querySelector(`.${styles.controlsToggle}`);

    controlsToggle.addEventListener('click', function () {
      controls.classList.toggle(`${styles.open}`);
    });
  }, []);

  return (
    <>
      <button className={styles.controlsToggle}>Custom</button>
      <div className={styles.controlsWrap}>
        <div className={styles.controls}>
          {ThemeSliders.map((theme, idx) => (
            <div key={idx}>
              <h3 className={[styles[`${theme.name}`]]}>
                <input
                  type="color"
                  defaultValue="#2978FF"
                  onChange={(e) => console.log(e.target.value)}
                />
                {theme.name}
              </h3>
              <span>{theme.red}</span>
              <br />
              <input
                className={styles.range}
                name={`${theme.red}`}
                type="range"
                min="0"
                max="255"
              />
              <br />
              <span>{theme.green}</span>
              <br />
              <input
                className={styles.range}
                name={`${theme.green}`}
                type="range"
                min="0"
                max="255"
              />
              <br />
              <span>{theme.blue}</span>
              <br />
              <input
                className={styles.range}
                name={`${theme.blue}`}
                type="range"
                min="0"
                max="255"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomTheme;
