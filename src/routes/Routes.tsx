import { Redirect, Route, Switch } from 'react-router-dom';
import { CounterView } from '../views/counter/Counter';
import { Home } from '../views/home/Home';
import { PhotosView } from '../views/photos/Photos';
import { ThemeView } from '../views/ThemeView.tsx/ThemeView';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/theme" component={ThemeView} />
      <Route path="/counter" component={CounterView} />
      <Route path="/photos" component={PhotosView} />
      <Route exact path="/" component={Home} />
      <Route path="*" component={Home} />
      <Route component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};
