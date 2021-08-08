import { Link } from 'react-router-dom';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

export const Navbar = () => {
  return (
    <nav>
      <Link to="/"> Home</Link>
      <Link to="/counter"> CounterWithTests</Link>
      <Link to="/photos"> PhotosAPI</Link>
      <Link to="/flex-grid"> Flex Grid</Link>
      <Link to="/css-grid"> CSS Grid</Link>
      <br />
      <ThemeSwitcher />
    </nav>
  );
};
