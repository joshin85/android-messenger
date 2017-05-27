This is a basic electron/react app to POC a cross platform android/electron messenger.  It's MVP is to allow users to send text messages from the electron application.

# Get Started
1. Install the dependencies 
```bash
npm install
```
2. Start the node server
```bash
npm start
```
3. Open the electron application
```bash
npm run electron
```

# Technologies
This a basic react/redux application using GCM and OAUTH 2.0 to reduce the need to an intermediate server.  The app uses nodejs to manage the local database, all data management is done via the node server.  This is done so if at a later point we want to separate the two it can be done easily.  

# Notes
At some point GCM will likely not be an effective way to transfer media files - this will need to be addressed.

