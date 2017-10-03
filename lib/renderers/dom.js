import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

//client side use window object initialData ; 

ReactDOM.render(
  <App initialData = {window.initialData}/>,
  document.getElementById('root')
);
