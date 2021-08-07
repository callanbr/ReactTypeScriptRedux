import { Redirect, Route, Switch } from 'react-router-dom';
import { CounterView } from '../views/counter/Counter';
import { GridView } from '../views/grid/GridView';
import { HomeView } from '../views/home/Home';
import { NewGridView } from '../views/newGrid/NewGridView';
import { PhotosView } from '../views/photos/Photos';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/counter" component={CounterView} />
      <Route path="/photos" component={PhotosView} />
      <Route path="/grid" component={GridView} />
      <Route path="/newgrid" component={NewGridView} />
      <Route exact path="/" component={HomeView} />
      <Route path="*" component={HomeView} />
      <Route component={HomeView} />
      <Redirect to="/" />
    </Switch>
  );
};
