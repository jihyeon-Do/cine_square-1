import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

//pages
import Home from './pages/Home';
import FatalError from './pages/FatalError';
import Signin from './pages/Signin';
import Complete from './pages/Complete';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ErrorBoundary FallbackComponent={FatalError}>
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/complete" exact component={Complete} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
