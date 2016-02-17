(function(angular) {

	"use strict";



	angular.module("WidgetApp", [])
		.controller("HomeCtrl", function($scope) {

			console.log("controller ran");

			$scope.colors = ["green","white","saffron","red","blue","gold"];


			function addColorAction() {

				$scope.$apply(function() {
					console.log("add color ran");
					$scope.colors.push($scope.newColor);
					console.dir($scope.colors);
				});

				//$scope.$digest();
			}

			window.addColor = addColorAction;

			$scope.countries = [
				{ name: "China", capital: "Beijing" },
				{ name: "India", capital: "New Delhi" },
				{ name: "Nepal", capital: "Kathmandu" },
				{ name: "United States", capital: "Washington, DC" }
			];

		});

})(angular);
