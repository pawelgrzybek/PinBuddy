import { loadingShowAction, loadingHideAction } from "./loading";
import { errorShowAction } from "./error";

export const postsGet = () => {
  return (dispatch, getState) => {
    dispatch(loadingShowAction());

    const { username, token } = getState().user;

    chrome.storage.local.get(["posts", "postsFetched"], result => {
      const { posts, postsFetched } = result;

      // Don't fetch new posts more often than 5 minutes
      // https://pinboard.in/api/#limits
      const now = Date.now();
      const outdatedPosts = now - postsFetched > 300000;

      if (outdatedPosts) {
        fetch(
          `https://api.pinboard.in/v1/posts/all?auth_token=${username}:${token}&format=json`
        )
          .then(newPostsData => newPostsData.json())
          .then(newPosts => {
            chrome.storage.local.set(
              {
                posts: newPosts,
                postsFetched: now
              },
              () => {
                dispatch({
                  type: "POSTS_GET",
                  posts: newPosts
                });
              }
            );
          })
          .catch(() => {
            dispatch(loadingHideAction());
            dispatch(errorShowAction());
          })
          .finally(() => {
            dispatch(loadingHideAction());
          });
      } else {
        dispatch(loadingHideAction());
        dispatch({
          type: "POSTS_GET",
          posts
        });
      }
    });
  };
};

export const postsDelete = (href, message, contextMessage) => {
  return (dispatch, getState) => {
    const { username, token } = getState().user;
    const { posts } = getState();

    const newState = posts.filter(post => post.href !== href);

    fetch(
      `https://api.pinboard.in/v1/posts/delete?auth_token=${username}:${token}&format=json&url=${encodeURIComponent(
        href
      )}`
    )
      .then(res => res.json())
      .then(resJSON => {
        if (resJSON.result_code === "done") {
          chrome.storage.local.set({ posts: newState }, () => {
            chrome.runtime.sendMessage("check current");
            dispatch({
              type: "POSTS_DELETE",
              href
            });
          });

          chrome.storage.sync.get(["enableSystemNotifications"], result => {
            if (result.enableSystemNotifications) {
              chrome.notifications.create({
                type: "basic",
                iconUrl: "/icons/icon-128.png",
                title: chrome.i18n.getMessage("notificationDeleteSucessful"),
                message,
                contextMessage
              });
            }
          });
        } else {
          dispatch(errorShowAction());
        }
      })
      .catch(() => {
        dispatch(errorShowAction());
      });
  };
};

export const postsAdd = postInfo => {
  return (dispatch, getState) => {
    dispatch(loadingShowAction());

    const { username, token } = getState().user;
    const { title, url, description, tags, privatePost, readLater } = postInfo;

    fetch(
      `https://api.pinboard.in/v1/posts/add?auth_token=${username}:${token}&format=json&url=${encodeURIComponent(
        url
      )}&description=${title}&extended=${description}&tags=${tags}&shared=${
        privatePost ? "no" : "yes"
      }&toread=${readLater ? "yes" : "no"}`
    )
      .then(res => res.json())
      .then(resJSON => {
        if (resJSON.result_code === "done") {
          const now = new Date();
          const yyyy = now.getFullYear();
          const mm = now.getMonth() + 1;
          const dd = now.getDate();

          const newPost = {
            href: url,
            description: title,
            extended: description,
            time: `${yyyy}-${mm}-${dd}`,
            shared: privatePost ? "no" : "yes",
            toread: readLater ? "yes" : "no",
            tags: tags,
            hash: Math.random().toString()
          };

          chrome.storage.local.get(["posts"], result => {
            const currentPosts = result.posts.filter(post => post.href !== url);
            const newState = [newPost, ...currentPosts];

            chrome.storage.local.set({ posts: newState }, () => {
              chrome.runtime.sendMessage("check current");

              chrome.storage.sync.get(["enableSystemNotifications"], result => {
                if (result.enableSystemNotifications) {
                  chrome.notifications.create(
                    {
                      type: "basic",
                      iconUrl: "/icons/icon-128.png",
                      title: chrome.i18n.getMessage(
                        "notificationSaveSucessful"
                      ),
                      message: title,
                      contextMessage: description
                    },
                    () => {
                      window.close();
                    }
                  );
                } else {
                  window.close();
                }
              });
            });
          });
        } else {
          dispatch(errorShowAction());
        }
      })
      .catch(() => {
        dispatch(errorShowAction());
      })
      .finally(() => {
        dispatch(loadingHideAction());
      });
  };
};
