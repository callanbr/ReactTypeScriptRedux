import { Redirect, Route, Switch } from 'react-router-dom';
import { CounterView } from '../views/counter/Counter';
import { HomeView } from '../views/home/Home';
import { PhotosView } from '../views/photos/Photos';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/counter" component={CounterView} />
      <Route path="/photos" component={PhotosView} />
      <Route exact path="/" component={HomeView} />
      <Route path="*" component={HomeView} />
      <Route component={HomeView} />
      <Redirect to="/" />
    </Switch>
  );
};
