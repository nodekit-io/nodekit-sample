/*
* OffGrid Talkie
*
* Copyright (c) 2017 OffGrid Networks. All Rights Reserved.
* SEE LICENSE
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import store from './store';
import { Provider } from 'mobx-react';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));