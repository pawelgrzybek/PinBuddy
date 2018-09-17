import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

render(<App />, document.getElementById('root'));

// chrome.notifications.create({
//   type: 'basic',
//   title: 'title',
//   message: 'message',
//   iconUrl: '/icons/icon-16.png',
// });

// const changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', data => {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function onclick(element) {
//   const color = element.target.value;
//   chrome.tabs.query({ active: true,
//     currentWindow: true }, tabs => {
//     chrome.tabs.executeScript(
//       tabs[0].id,
//       { code: `document.body.style.backgroundColor = "${color}";` });
//   });
// };

