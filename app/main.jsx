import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import lightwalelt from 'eth-lightwallet';

// import Balance from './components/balance.jsx';
// import Balance from './components/balance.jsx';
import App from './container/balance'
import reducer from './reducer/reducer'

const store = createStore(reducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);