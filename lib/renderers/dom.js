import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import StateApi from 'state-api';

const store = new StateApi(window.initialData);
//client side use window object initialData ;

ReactDOM.render(
  <App store = {store}/>,
  document.getElementById('root')
);
