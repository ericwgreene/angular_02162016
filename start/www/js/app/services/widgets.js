(function(angular) {

	// https://t4dclass.herokuapp.com/api/widgets

	factory.$inject = ["$http", "BASE_URL"];

	function factory($http, BASE_URL) {

		var widgetAPIURL = "/api/widgets";

		return {
			getAll: function() {
				return $http.get(BASE_URL + widgetAPIURL);
			},
			get: function(widgetId) {
				return $http.get(BASE_URL + widgetAPIURL + "/" + encodeURIComponent(widgetId));
			}
		};

	}

	angular.module("WidgetApp.Services")
		.factory("widgets", factory);

})(angular);
