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

const button = document.createElement('button');
button.innerHTML = 'popoup';

document.body.appendChild(button);

console.log('test');
