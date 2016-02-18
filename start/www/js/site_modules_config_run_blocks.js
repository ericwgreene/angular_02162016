(function(angular) {

	"use strict";

	angular.module("WidgetApp.Services", [])
		.config(function() {
			console.log("WidgetApp.Services config")
		})
		.run(function($log) {
			$log.log("it works!");
			console.log("WidgetApp.Services run")
		});

	angular.module("WidgetApp.Controllers", [])
		.controller("HomeCtrl", function($scope) {
			$scope.message = "Hi Class 1!";
		})
		.config(function() {
			console.log("WidgetApp.Controllers config")
		})
		.run(function() {
			console.log("WidgetApp.Controllers run")
		});

	angular.module("WidgetApp", ["WidgetApp.Services","WidgetApp.Controllers"])
		.config(function() {
			console.log("WidgetApp config")
		})
		.run(function() {
			console.log("WidgetApp run")
		});


})(angular);
