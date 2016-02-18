(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		.directive("vwRequired", function() {

			return {
				require: "ngModel",
				link: function(scope, element, attrs, ctrl) {

					function validate(value) {

						if (value === undefined || value === null || String(value).length === 0) {
							ctrl.$setValidity("vw-required", false);
							return;
						} else {
							ctrl.$setValidity("vw-required", true);
							return value;
						}

					}

					ctrl.$formatters.push(validate);
					ctrl.$parsers.push(validate);

				}
			};

		})
		.controller("HomeCtrl", function($scope) {

			$scope.widget = {
				size: "large"
			};

			$scope.colors = [
				{ code: "red", label: "Red", category: "Premium" },
				{ code: "blue", label: "Blue", category: "Normal" },
				{ code: "silver", label: "Silver", category: "Premium" },
				{ code: "white", label: "White", category: "Discount" },
				{ code: "black", label: "Black", category: "Normal" },
				{ code: "gray", label: "Gray", category: "Discount" }
			];

			$scope.colorChange= function() {
				if (!$scope.widget.color) {
					$scope.widget.color = $scope.lastWidgetColor;
				} else {
					$scope.lastWidgetColor = $scope.widget.color;
				}
			};

			$scope.saveWidget = function() {

				if ($scope.widgetForm.$invalid) {
					alert("Your form is invalid.");
					return;
				}

				console.dir($scope.widget);
				console.dir($scope);
			};

		});

})(angular);
