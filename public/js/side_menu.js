console.log('renderer process 1');

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path')
const url = require('url')

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', function (event) {
  let winThree = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });
winThree.loadFile('public/signin.html');

winThree.webContents.openDevTools();
});