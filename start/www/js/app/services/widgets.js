(function(angular) {

	// https://t4dclass.herokuapp.com/api/widgets

	factory.$inject = ["$http", "BASE_URL"];

	function factory($http, BASE_URL) {

		var
			widgetAPIURL = "/api/widgets",
			collectionUrl = BASE_URL + widgetAPIURL,
			elementUrl = BASE_URL + widgetAPIURL + "/";

		return {
			getAll: function() {
				return $http.get(collectionUrl);
			},
			get: function(widgetId) {
				return $http.get(elementUrl + encodeURIComponent(widgetId));
			},
			insert: function(widget) {
				return $http.post(collectionUrl, widget);
			},
			update: function(widget) {
				return $http.put(elementUrl + encodeURIComponent(widget._id), widget);
			},
			delete: function(widgetId) {
				return $http.delete(elementUrl + encodeURIComponent(widgetId))
			}
		};

	}

	angular.module("WidgetApp.Services")
		.factory("widgets", factory);

})(angular);
