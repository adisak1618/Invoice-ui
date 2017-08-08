import 'purecss/build/pure.css';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistroy } from 'react-router';
import routes from './routes';

render(
  <Router routes={routes} history={browserHistroy} />,
  document.getElementById('app'));
