// update extensions icon
const setIcon = postExists => {
  chrome.browserAction.setIcon({
    path: postExists ? '/icons/icon-active-16.png' : '/icons/icon-16.png',
  });
};

// listen to url updates to check for icons change
chrome.tabs.onUpdated.addListener(id => {
  chrome.tabs.get(id, tabInfo => {
    const { url } = tabInfo;
    chrome.storage.local.get(['posts'], posts => {
      const postExists = !!posts.posts.find(post => post.href === url);
      setIcon(postExists);
    });
  });
});

// listen to new tabs to check for icons change
chrome.tabs.onActivated.addListener(tab => {
  chrome.tabs.get(tab.tabId, tabInfo => {
    const { url } = tabInfo;
    chrome.storage.local.get(['posts'], posts => {
      const postExists = !!posts.posts.find(post => post.href === url);
      setIcon(postExists);
    });
  });
});

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
//   console.log('Command:', command);
// });
