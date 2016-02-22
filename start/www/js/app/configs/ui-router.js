(function(angular) {

	config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

	function config($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				controller: "homeCtrl",
				templateUrl: "tpls/widget-list.html"
			})
			.state("create", {
				url: "/widgets/create",
				controller: "editWidgetCtrl",
				templateUrl: "tpls/widget-edit.html"
			})
			.state("view", {
				url: "/widgets/:widgetId",
				controller: "viewWidgetCtrl",
				templateUrl: "tpls/widget-view.html"
			})
			.state("edit", {
				url: "/widgets/:widgetId/edit",
				controller: "editWidgetCtrl",
				templateUrl: "tpls/widget-edit.html"
			});

	}

	angular.module("WidgetApp.Configs")
		.config(config);

})(angular);
