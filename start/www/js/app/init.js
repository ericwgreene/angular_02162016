(function(angular) {

	angular.module("WidgetApp.Constants", []);
	angular.module("WidgetApp.Services", ["WidgetApp.Constants"]);
	angular.module("WidgetApp.Configs", ["WidgetApp.Services"]);
	angular.module("WidgetApp.Controllers", ["WidgetApp.Services"]);
	angular.module("WidgetApp", ["ui.router","WidgetApp.Configs","WidgetApp.Controllers"]);

})(angular);
