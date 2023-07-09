```javascript
let userPrivateKey = '';
let userProfile = {};

document.getElementById('registerButton').addEventListener('click', registerName);
document.getElementById('nameInput').addEventListener('change', updateProfile);
document.getElementById('socialMediaLinks').addEventListener('change', updateProfile);

function registerName() {
  const name = document.getElementById('nameInput').value;
  chrome.runtime.sendMessage({type: 'REGISTER_NAME', name: name}, function(response) {
    userPrivateKey = response.privateKey;
    document.getElementById('privateKeyDisplay').innerText = userPrivateKey;
  });
}

function updateProfile() {
  userProfile.name = document.getElementById('nameInput').value;
  userProfile.socialMediaLinks = document.getElementById('socialMediaLinks').value;
  chrome.runtime.sendMessage({type: 'UPDATE_PROFILE', profile: userProfile}, function(response) {
    if (response.success) {
      saveToStorage();
    }
  });
}

function getProfile() {
  chrome.runtime.sendMessage({type: 'GET_PROFILE'}, function(response) {
    userProfile = response.profile;
    document.getElementById('nameInput').value = userProfile.name;
    document.getElementById('socialMediaLinks').value = userProfile.socialMediaLinks;
    document.getElementById('privateKeyDisplay').innerText = userProfile.privateKey;
  });
}

function saveToStorage() {
  chrome.storage.sync.set({userProfile: userProfile}, function() {
    console.log('User profile saved to storage.');
  });
}

function retrieveFromStorage() {
  chrome.storage.sync.get(['userProfile'], function(result) {
    if (result.userProfile) {
      userProfile = result.userProfile;
      document.getElementById('nameInput').value = userProfile.name;
      document.getElementById('socialMediaLinks').value = userProfile.socialMediaLinks;
      document.getElementById('privateKeyDisplay').innerText = userProfile.privateKey;
    }
  });
}

document.addEventListener('DOMContentLoaded', retrieveFromStorage);
```