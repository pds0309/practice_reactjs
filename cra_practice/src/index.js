import { cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Appp from './cleanup';

ReactDOM.render(
  <React.StrictMode>
    <Appp />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

