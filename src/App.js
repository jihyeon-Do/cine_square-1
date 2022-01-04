import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ConnectedRouter } from 'connected-react-router';

//pages
import Home from './pages/Home';
import FatalError from './pages/FatalError';
import Signin from './pages/Signin';
import Complete from './pages/Complete';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import HeaderTemplate from './components/HeaderTemplate';
import FooterTemplate from './components/FooterTemplate';
import Signup from './pages/Signup';
import Detail from './pages/Detail';
import Profile from './pages/Profile';
import Evaluate from './pages/Evaluate';
import MyBooks from './pages/MyBooks';

function App({ history }) {
  return (
    <ErrorBoundary FallbackComponent={FatalError}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/complete" component={Complete} />
          <Route path="/profile" component={Profile} />
          <Route path="/detail/:movieCd" component={Detail} />
          <Route path="/evaluate" component={Evaluate} />
          <Route path="/mybooks" component={MyBooks} />
          <Route path="/search/:keyword" component={Search} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
