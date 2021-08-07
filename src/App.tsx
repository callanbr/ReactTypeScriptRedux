import styles from './app.module.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes/Routes';
import { Navbar } from './components/navbar/navbar';

export const App = () => {
  return (
    <div className={styles}>
      <Router basename="/">
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
};
