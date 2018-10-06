// icon change when url exists
const listenForIconChange = tab => {
  if (tab) {
    const { url } = tab;
    chrome.storage.local.get(['posts'], posts => {
      if (posts.posts) {
        const postExists = !!posts.posts.find(post => post.href === url);
        chrome.browserAction.setIcon({
          path: postExists ? '/icons/icon-active-128.png' : '/icons/icon-128.png',
          // path: {
          //   16: postExists ? '/icons/icon-active-16.png' : '/icons/icon-16.png',
          //   48: postExists ? '/icons/icon-active-48.png' : '/icons/icon-48.png',
          //   128: postExists ? '/icons/icon-active-128.png' : '/icons/icon-128.png'
          // }
        });
      }
    });
  }
};

// listen to url updates
chrome.tabs.onUpdated.addListener(result => {
  if (result) {
    chrome.tabs.get(result, listenForIconChange);
  }
});

// listen to new tabs
chrome.tabs.onActivated.addListener(result => {
  if (result) {
    chrome.tabs.get(result.tabId, listenForIconChange);
  }
});

// listen to messages from other parts of an extension
chrome.runtime.onMessage.addListener(request => {

  if (request === 'check current') {
    chrome.tabs.query({ active: true }, result => {
      if (result) {
        chrome.tabs.get(result[0].id, listenForIconChange);
      }
    });
  }

});
