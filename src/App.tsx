import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes/Routes';
import { Navbar } from './components';
import { useTheme } from './hooks';

export const App = () => {
  useTheme();
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Routes />
      </Router>
    </>
  );
};
