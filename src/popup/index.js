import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));

// store.subscribe(() => {
// console.log('----------------------------------------------');
// console.log(' ');
// console.log('Redux state');
// console.log(store.getState());
// console.log(' ');
// console.log('----------------------------------------------');
// console.log('Chrome storage');
// chrome.storage.local.get(result => {
//   console.log(result);
//   console.log(' ');
//   console.log('----------------------------------------------');
// });
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
