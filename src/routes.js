import { Route, Switch } from 'react-router-dom';
import Signin from './pages/SignInPage';
import Home from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={Signin} />
    </Switch>
  );
}
