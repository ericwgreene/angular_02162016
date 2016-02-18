(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		.factory("Events", function() {

			var _events = {};

			return {
				trigger: function(eventName, eventData) {

					if (_events[eventName]) {
						_events[eventName].forEach(function(eventHandler) {
							console.dir(eventHandler);
							eventHandler(eventData);
						});
					}

				},
				on: function(eventName, eventHandler) {

						if (!_events[eventName]) {
							_events[eventName] = [];
						}

						_events[eventName].push(eventHandler);

				}
			}

		})
		.controller("LeftCtrl", function($scope, Events) {

			$scope.clickMe = function() {
				Events.trigger("message_update", "Button was clicked!");
			};

		})
		.controller("RightCtrl", function($scope, Events) {

			Events.on("message_update", function(msg) {
				$scope.message = msg;
			});

		});


})(angular);
