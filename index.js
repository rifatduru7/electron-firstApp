const electron = require('electron');


const {
  app,
  BrowserWindow
} = electron;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});

  //Dosya sisteminin içinde index.html dosyasını bulabilmek için kullanılan yapı.
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});