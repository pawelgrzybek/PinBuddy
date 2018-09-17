import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

const store = createStore(
  reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log('----------------------------------------------');
  console.log(' ');
  console.log('Redux state');
  console.log(store.getState());
  console.log(' ');
  console.log('Chrome storage');
  chrome.storage.local.get(result => {
    console.log(result);
    console.log(' ');
    console.log('----------------------------------------------');
  });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
