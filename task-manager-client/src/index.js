import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import Board from './components/Board';
import Dashboard from './components/Dashboard';

ReactDOM.render(
  <React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path='/Board/:id' component={Board} />
				<Route path='/' component={Dashboard} />
			</Switch>
		</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
