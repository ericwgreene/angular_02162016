(function(angular) {

	controller.$inject = ["$scope", "widgets"];

	function controller($scope, widgets) {

		widgets.getAll().then(function(results) {
			$scope.widgets = results.data;
		});

	}

	angular.module("WidgetApp.Controllers")
		.controller("homeCtrl", controller);

})(angular);
