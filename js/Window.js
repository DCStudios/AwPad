(function ($) {
    var Remote = require("remote");
    var jquery = require("jquery");
    console.log(jquery);
    var MainWindow = (function () {
        function MainWindow() {
            this.initWindow();
            this.initButtons();
        }
        MainWindow.prototype.initWindow = function () {
            this.handle = Remote.getCurrentWindow();
        };
        MainWindow.prototype.initButtons = function () {
            this.findButtons();
            this.setupButtons();
        };
        MainWindow.prototype.findButtons = function () {
            this.$closeButton = $("#app-titlebar .buttons .button.close");
            this.$maximizeButton = $("#app-titlebar .buttons .button.maximize");
            this.$minimizeButton = $("#app-titlebar .buttons .button.minimize");
        };
        MainWindow.prototype.setupButtons = function () {
            this.$closeButton.on("click", this.onCloseButtonClicked.bind(this));
            console.log(this.$closeButton);
        };
        MainWindow.prototype.onCloseButtonClicked = function () {
            this.handle.close();
            console.log("Hello World");
        };
        return MainWindow;
    })();
}($));
