const Electron = require( "electron" );
const App = Electron.app;
const BrowserWindow = Electron.BrowserWindow;

Electron.crashReporter.start();

var mainWindow = null;

App.on("window-all-closed", function() {
	if( process.platform != "darwin" ) App.quit();
});

App.on("ready", function(){
	mainWindow = new BrowserWindow({ width:800, height:600, frame:false });
	mainWindow.setMenu( null );
	mainWindow.loadURL( "file://"+__dirname+"/AwPad.html" );
	mainWindow.on("closed", ()=>{ mainWindow = null; });
	mainWindow.toggleDevTools();
});
