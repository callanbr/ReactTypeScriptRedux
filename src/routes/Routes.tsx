import { Redirect, Route, Switch } from 'react-router-dom';
import { CounterView } from '../views/counter/Counter';
import { CssGridView } from '../views/cssGrid/CssGridView';
import { FlexGridView } from '../views/flexGrid/FlexGridView';
import { HomeView } from '../views/home/Home';
import { PhotosView } from '../views/photos/Photos';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/counter" component={CounterView} />
      <Route path="/photos" component={PhotosView} />
      <Route path="/flex-grid" component={FlexGridView} />
      <Route path="/css-grid" component={CssGridView} />
      <Route exact path="/" component={HomeView} />
      <Route path="*" component={HomeView} />
      <Route component={HomeView} />
      <Redirect to="/" />
    </Switch>
  );
};
