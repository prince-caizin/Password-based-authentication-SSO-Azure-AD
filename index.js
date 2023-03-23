const express = require('express');
const bodyParser = require('body-parser');
const msal = require('@azure/msal-node');

const app = express();
const config = {
  auth: {
    clientId: '0973b7e0-879c-45d8-94aa-17af6eb97d9a',
    authority: 'https://login.microsoftonline.com/83afea21-49a2-4502-8264-e11560d9fe5a',
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Verbose,
    },
  },
};

const pca = new msal.PublicClientApplication(config);

const username = 'user2@jatinkamboj3032gmail.onmicrosoft.com';
const password = '{JatinKamboj04}';

async function signIn() {
  const authResult = await pca.acquireTokenByUsernamePassword({
    username,
    password,
    scopes: ['user.read'],
  });

  console.log('Access token:', authResult.accessToken);
}

signIn();
app.listen(3000, ()=> console.log("listening to server 3000"))
