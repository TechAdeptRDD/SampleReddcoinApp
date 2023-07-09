```javascript
let userPrivateKey = null;
let userProfile = null;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ userPrivateKey: null });
  chrome.storage.sync.set({ userProfile: null });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'REGISTER_NAME') {
    registerName(request.data);
  } else if (request.message === 'UPDATE_PROFILE') {
    updateProfile(request.data);
  } else if (request.message === 'GET_PROFILE') {
    getProfile(sendResponse);
    return true; // Keeps the message channel open for asynchronous response
  }
});

function registerName(data) {
  // TODO: Implement ReddCoin name registration logic here
  // After successful registration, save the private key and user profile
  userPrivateKey = data.privateKey;
  userProfile = data.profile;
  saveToStorage('userPrivateKey', userPrivateKey);
  saveToStorage('userProfile', userProfile);
}

function updateProfile(data) {
  // TODO: Implement profile update logic here
  // After successful update, save the updated user profile
  userProfile = data;
  saveToStorage('userProfile', userProfile);
}

function getProfile(sendResponse) {
  retrieveFromStorage('userProfile', sendResponse);
}

function saveToStorage(key, value) {
  chrome.storage.sync.set({ [key]: value });
}

function retrieveFromStorage(key, sendResponse) {
  chrome.storage.sync.get([key], (result) => {
    sendResponse(result[key]);
  });
}
```