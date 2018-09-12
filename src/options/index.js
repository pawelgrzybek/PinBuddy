import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

render(<App />, document.getElementById('root'));

// const page = document.getElementById('buttonDiv');
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
// function constructOptions(kButtonColors) {
//   for (const item of kButtonColors) {
//     const button = document.createElement('button');
//     button.style.backgroundColor = item;
//     button.addEventListener('click', () => {
//       chrome.storage.sync.set({ color: item }, () => {
//         console.log(`color is ${item}`);
//       });
//     });
//     page.appendChild(button);
//   }
// }
// constructOptions(kButtonColors);
