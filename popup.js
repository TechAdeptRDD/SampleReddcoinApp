```javascript
document.addEventListener('DOMContentLoaded', function() {
    let registerButton = document.getElementById('registerButton');
    let nameInput = document.getElementById('nameInput');
    let socialMediaLinks = document.getElementById('socialMediaLinks');
    let privateKeyDisplay = document.getElementById('privateKeyDisplay');

    registerButton.addEventListener('click', function() {
        let name = nameInput.value;
        registerName(name);
    });

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.message === 'UPDATE_PROFILE') {
            userProfile = request.data;
            displayProfile();
        }
    });

    function registerName(name) {
        chrome.runtime.sendMessage({
            message: 'REGISTER_NAME',
            data: name
        });
    }

    function displayProfile() {
        nameInput.value = userProfile.name;
        socialMediaLinks.innerHTML = '';
        userProfile.links.forEach(function(link) {
            let linkElement = document.createElement('a');
            linkElement.href = link;
            linkElement.textContent = link;
            socialMediaLinks.appendChild(linkElement);
        });
        privateKeyDisplay.textContent = userPrivateKey;
    }

    function getProfile() {
        chrome.runtime.sendMessage({
            message: 'GET_PROFILE'
        }, function(response) {
            userProfile = response.data;
            displayProfile();
        });
    }

    getProfile();
});
```