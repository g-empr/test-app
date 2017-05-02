const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
let win;

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600, webPreferences: { nodeIntegration: false } });
  win.loadURL(`file://${__dirname}/index.html`);
  // win.webContents.openDevTools(); 開発ツールは非表示に変更
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});