(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		.controller("HomeCtrl", function($scope) {
			$scope.message = "Hello World!";
			//$scope.person = {};

			$scope.products = [
				{ code: "VC", label: "vCenter" },
				{ code: "VUM", label: "vUpgrade Manager" },
				{ code: "VROPS", label: "vRealize Operations Manager" },
				{ code: "VI", label: "vInstaller" }
			];
		});


})(angular);
