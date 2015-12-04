/// <reference path="../typings/jquery/jquery.d.ts"/>
/// <reference path="../typings/github-electron/github-electron.d.ts"/>

(function($:JQueryStatic) {
	var Remote:any = require("remote");
	var jquery = require("jquery");
	console.log( jquery );

	class MainWindow {

		private handle:GitHubElectron.BrowserWindow;

		private $closeButton:JQuery;
		private $maximizeButton:JQuery;
		private $minimizeButton:JQuery;

		constructor() {
			this.initWindow();
			this.initButtons();
		}

		private initWindow():void {
			this.handle = Remote.getCurrentWindow();
		}

		private initButtons():void {
			this.findButtons();
			this.setupButtons();
		}

		private findButtons():void {
			this.$closeButton = $( "#app-titlebar .buttons .button.close" );
			this.$maximizeButton = $( "#app-titlebar .buttons .button.maximize" );
			this.$minimizeButton = $( "#app-titlebar .buttons .button.minimize" );
		}

		private setupButtons():void {
			this.$closeButton.on("click", this.onCloseButtonClicked.bind( this ));
			console.log( this.$closeButton );
		}

		private onCloseButtonClicked():void {
			this.handle.close();
			console.log( "Hello World");
		}

	}
}( $ ));
