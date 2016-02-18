(function(angular) {

	"use strict";

	homeCtrl.$inject = ["$log", "$scope"];

	function homeCtrl(l, s) {

		s.message = "Hi Class!";
		l.log(s.message);


	}

	angular.module("WidgetApp", [])
		.controller("HomeCtrl", homeCtrl);

})(angular);
