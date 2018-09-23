


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


// chrome.browserAction.setIcon({
//   path: '/icons/icon-16.png'
// });

// chrome.browserAction.setIcon({
//   path: '/icons/icon-active-16.png'
// });

// chrome.browserAction.setIcon({
//   path: '/icons/icon-inactive-16.png'
// });

// chrome.tabs.onHighlighted.addListener(id => console.log(id));


chrome.runtime.onInstalled.addListener(e => {
  chrome.contextMenus.create({
    id: 'addToPinboard',
    title: 'Add to Pinboard',
  });

  chrome.contextMenus.create({
    id: 'addToPinboardWithDescription',
    title: 'Add to Pinboard (with description)',
    contexts: ['selection']
  });

  chrome.contextMenus.create({
    id: 'addLinkToPinboard',
    title: 'Add link to Pinboard',
    contexts: ['link']
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


chrome.commands.onCommand.addListener(command => {
  console.log('Command:', command);
});
