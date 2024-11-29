import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

const Home = () => {
  return <div>hello</div>
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/portfolio/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
