Shared Dependencies:

1. **Exported Variables**: 
   - `userPrivateKey`: The private key of the user, used across multiple files for encryption and decryption.
   - `userProfile`: The user's profile data, including their unique name and social media links.

2. **Data Schemas**: 
   - `UserProfileSchema`: Defines the structure of the user's profile data, including fields for the unique name, social media links, and private key.

3. **DOM Element IDs**: 
   - `registerButton`: The button for registering a unique name on the blockchain.
   - `nameInput`: The input field for entering the unique name.
   - `socialMediaLinks`: The section for displaying and managing social media links.
   - `privateKeyDisplay`: The section for displaying the user's private key.

4. **Message Names**: 
   - `REGISTER_NAME`: Message sent when the user wants to register a unique name.
   - `UPDATE_PROFILE`: Message sent when the user updates their profile data.
   - `GET_PROFILE`: Message sent when a script needs to retrieve the user's profile data.

5. **Function Names**: 
   - `registerName()`: Function for registering a unique name on the blockchain.
   - `updateProfile()`: Function for updating the user's profile data.
   - `getProfile()`: Function for retrieving the user's profile data.
   - `saveToStorage()`: Function for saving data to Chrome Storage.
   - `retrieveFromStorage()`: Function for retrieving data from Chrome Storage.