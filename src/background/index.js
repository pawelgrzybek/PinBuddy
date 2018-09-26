// icon change when url exists
const listenForIconChange = tab => {
  const { url } = tab;
  chrome.storage.local.get(['posts'], posts => {
    if (posts.posts) {
      const postExists = !!posts.posts.find(post => post.href === url);
      chrome.browserAction.setIcon({
        path: postExists ? '/icons/icon-active-16.png' : '/icons/icon-16.png',
      });
    }
  });
};

// listen to url updates
chrome.tabs.onUpdated.addListener(result => {
  chrome.tabs.get(result, listenForIconChange);
});

// listen to new tabs
chrome.tabs.onActivated.addListener(result => {
  chrome.tabs.get(result.tabId, listenForIconChange);
});

// chrome.runtime.onInstalled.addListener(e => {
//   chrome.contextMenus.create({
//     id: 'addToPinboard',
//     title: 'Add to Pinboard',
//   });

//   chrome.contextMenus.create({
//     id: 'addToPinboardWithDescription',
//     title: 'Add to Pinboard (with description)',
//     contexts: ['selection']
//   });

//   chrome.contextMenus.create({
//     id: 'addLinkToPinboard',
//     title: 'Add link to Pinboard',
//     contexts: ['link']
//   });
// });

// chrome.commands.onCommand.addListener(command => {
//   console.log('Command:', command);
// });

// listen for some mesages from other parts of an app
chrome.runtime.onMessage.addListener(request => {

  if (request === 'check current') {
    chrome.tabs.query({ active: true }, result => {
      chrome.tabs.get(result[0].id, listenForIconChange);
    });
  }

});
