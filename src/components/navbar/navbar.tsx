import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to="/"> Home</Link>
      <Link to="/counter"> CounterWithTests</Link>
      <Link to="/photos"> PhotosAPI</Link>
      <Link to="/theme"> Custom Theme</Link>
      <Link to="/testing"> Testing </Link>
    </nav>
  );
};
