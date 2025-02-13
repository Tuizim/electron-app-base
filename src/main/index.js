const {app, BrowserWindow} = require('electron');
const path = require('path');
let mainWindow;

app.whenReady().then(()=>{
    mainWindow = new BrowserWindow({
        width:700,
        height:500,
        resizable: false,
        icon: path.join(__dirname,'assets','ico.png')
        
    });
    mainWindow.removeMenu()
    mainWindow.loadURL(path.join(__dirname,'index.html'))
});
