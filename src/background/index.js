


// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color: '#3aa757' }, () => {
//     console.log('The color is green.');
//     console.log(chrome.storage);
//   });

//   chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [new chrome.declarativeContent.PageStateMatcher({
//         pageUrl: { hostEquals: 'developer.chrome.com' },
//       })
//       ],
//       actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });

// });

chrome.runtime.onInstalled.addListener(e => {
  console.log('onInstalled');

  chrome.storage.local.set({ key: 'tesssstttt' });

  chrome.contextMenus.create({
    id: 'sampleContextMenu',
    title: 'Sample Context Menu',
    contexts: ['selection']
  });
});


// chrome.commands.onCommand.addListener(command => {
// console.log(command);

// if (command === 'save-url') {
//   console.log('🐘 💨', 'save-url');
// }
// else if (command === 'read-later') {
//   console.log('🐘 💨', 'read-later');
// }
// });

/* eslint-disable  */
chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});
/* eslint-enable  */
