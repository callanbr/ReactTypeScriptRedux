import { Grid } from '../../components/grid/Grid';
import { Header } from '../../components/header/Header';
import styles from '../../app.module.scss';
import { useRootState } from '../../redux/hooks';
import ThemeSwitcher from '../../components/themeSwitcher/ThemeSwitcher';

const lightImage = require('../../assets/images/placeholderLight.png');
const darkImage = require('../../assets/images/placeholderDark.png');

export const Home = () => {
  const storedTheme = useRootState((state) => state.themeChanger.currentTheme);
  const headerImage = storedTheme == styles.themeLight ? lightImage : darkImage;

  return (
    <>
      <Header size={60} image={headerImage} title="Boilerplate"></Header>
      <ThemeSwitcher />
      <Grid breakpoint>
        <Grid
          id="GridContainer"
          container
          gap="md"
          gridTemplate
          gridXS={[[1], [2], [3], [4], [5], [6]]}
          gridSM={[
            [1, 1],
            [2, 3],
            [4, 5],
            [6, 6],
          ]}
          gridMD={[
            [1, 2],
            [3, 4],
            [5, 6],
          ]}
          gridLG={[
            [1, 1, 2],
            [3, 4, 2],
            [3, 5, 5],
            [3, 5, 5],
            [6, 6, 6],
          ]}
          gridXL={[
            [1, 1, 2, 2],
            [3, 4, 2, 2],
            [3, 5, 5, 5],
            [3, 5, 5, 5],
            [3, 6, 6, 6],
          ]}
        >
          <Grid item raised area={1}>
            <li>Environment: {process.env.NODE_ENV}</li>
            <li>Server: {process.env.server}</li>
          </Grid>
          <Grid
            item
            area={2}
            clickType="button"
            onClick={() => {
              alert('Clicked!');
            }}
          >
            Button Alert Clicked!
          </Grid>
          <Grid
            item
            area={3}
            clickType="link"
            href="https://www.google.com/"
            target="_blank"
          >
            Link to Google.com
          </Grid>
          <Grid item area={4} clickType="routerLink" to="/counter">
            Router Link to Counter
          </Grid>
          <Grid item raised area={5}>
            Raised Box
          </Grid>
          <Grid item area={6}>
            Not Raised
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
