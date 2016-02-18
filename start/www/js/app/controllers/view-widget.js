(function(angular) {

	controller.$inject = ["$scope", "widgets", "$stateParams", "$state"];

	function controller($scope, widgets, $stateParams, $state) {

		var widgetId = $stateParams.widgetId; // parseInt($stateParams.widgetId, 10);

		widgets.get(widgetId).then(function(results) {
			$scope.widget = results.data;
		});

		$scope.editWidget = function() {
			$state.go("edit", { widgetId: widgetId });
		};

		$scope.returnToList =  function() {
			$state.go("home");
		};

	}

	angular.module("WidgetApp.Controllers")
		.controller("viewWidgetCtrl", controller);


})(angular);
