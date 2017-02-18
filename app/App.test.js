import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import store from './store';
import { Provider } from 'mobx-react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});

