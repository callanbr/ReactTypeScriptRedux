import styles from './app.module.scss';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes/Routes';
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher';

export const App = () => {
  return (
    <div className={styles}>
      <ThemeSwitcher />
      <br />
      <Router basename="/">
        <Link to="/"> Home</Link>
        <Link to="/counter"> CounterWithTests</Link>
        <Link to="/photos"> PhotosAPI</Link>
        <Link to="/grid"> Grid</Link>
        <Routes />
      </Router>
    </div>
  );
};
