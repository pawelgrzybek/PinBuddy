// icon change when url exists
const listenForIconChange = tab => {
  if (tab) {
    const { url } = tab;
    chrome.storage.local.get(['posts'], posts => {
      if (posts.posts) {
        const postExists = !!posts.posts.find(post => post.href === url);
        chrome.browserAction.setIcon({
          path: postExists ? '/icons/icon-active-16.png' : '/icons/icon-16.png',
        });
      }
    });
  }
};

// listen to url updates
chrome.tabs.onUpdated.addListener(result => {
  chrome.tabs.get(result, listenForIconChange);
});

// listen to new tabs
chrome.tabs.onActivated.addListener(result => {
  chrome.tabs.get(result.tabId, listenForIconChange);
});

// listen to messages from other parts of an extension
chrome.runtime.onMessage.addListener(request => {

  if (request === 'check current') {
    chrome.tabs.query({ active: true }, result => {
      chrome.tabs.get(result[0].id, listenForIconChange);
    });
  }

});
