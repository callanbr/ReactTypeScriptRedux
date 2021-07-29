import { Redirect, Route, Switch } from 'react-router-dom';
import { CounterPage } from '../views/CounterPage/CounterPage';
import { Home } from '../views/Home/Home';
import { Notes } from '../components/Notes/Notes';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/notes" component={Notes} />
      <Route exact path="/" component={Home} />
      <Route path="*" component={Home} />
      <Route component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};
