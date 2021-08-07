import { Link } from 'react-router-dom';
import { Grid } from '../grid/Grid';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

export const Navbar = () => {
  return (
    <nav>
      <Grid container spacing="xl" justifyContent="center" alignItems="center">
        <Grid item sm={12} md={4}>
          <Link to="/"> Home</Link>
          <Link to="/counter"> CounterWithTests</Link>
          <Link to="/photos"> PhotosAPI</Link>
          <Link to="/grid"> Grid</Link>
        </Grid>
        <Grid item sm={12} md={4}>
          <ThemeSwitcher />
        </Grid>
      </Grid>
    </nav>
  );
};
