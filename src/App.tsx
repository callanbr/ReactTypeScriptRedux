import styles from './app.module.scss';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes/Routes';

export const App = () => {
  return (
    <div className={styles}>
      <Router basename="/">
        <Link to="/"> Home</Link>
        <Link to="/counter"> CounterPage</Link>
        <Link to="/notes"> Notes</Link>
        <Routes />
      </Router>
    </div>
  );
};
