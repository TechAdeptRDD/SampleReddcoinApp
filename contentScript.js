```javascript
let userPrivateKey;
let userProfile;

// Function to retrieve user profile from storage
function retrieveFromStorage() {
    chrome.storage.sync.get(['userProfile', 'userPrivateKey'], function(result) {
        userProfile = result.userProfile;
        userPrivateKey = result.userPrivateKey;
    });
}

// Function to handle name registration
function registerName() {
    chrome.runtime.sendMessage({type: 'REGISTER_NAME', data: {name: userProfile.name, privateKey: userPrivateKey}}, function(response) {
        console.log(response);
    });
}

// Function to handle profile update
function updateProfile() {
    chrome.runtime.sendMessage({type: 'UPDATE_PROFILE', data: userProfile}, function(response) {
        console.log(response);
    });
}

// Function to get profile
function getProfile() {
    chrome.runtime.sendMessage({type: 'GET_PROFILE'}, function(response) {
        userProfile = response.data;
    });
}

// Event listener for register button
document.getElementById('registerButton').addEventListener('click', function() {
    registerName();
});

// Event listener for profile update
document.getElementById('updateProfileButton').addEventListener('click', function() {
    updateProfile();
});

// Retrieve user profile from storage on script load
retrieveFromStorage();
```