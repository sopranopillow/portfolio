import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import { Home } from './portfolio';
import './fonts/PressStart2P-Regular.ttf';

ReactDOM.render(
  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path="/portfolio/" component={Home} />
  //   </Switch>
  // </BrowserRouter>,
  <>
    <Home />
  </>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
