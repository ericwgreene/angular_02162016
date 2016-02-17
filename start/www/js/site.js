(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		.controller("ParentCtrl", function($scope) {

			$scope.o = {};

		})
		.controller("ChildCtrl", function($scope) {

		});
})(angular);
