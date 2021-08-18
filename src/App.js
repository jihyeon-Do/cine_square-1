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
import HeaderTemplate from './components/atom/HeaderTemplate';
import FooterTemplate from './components/atom/FooterTemplate';
import Signup from './pages/Signup';

function App({ history }) {
  return (
    <ErrorBoundary FallbackComponent={FatalError}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/complete" component={Complete} />
          <Route path="/search" component={Search} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
