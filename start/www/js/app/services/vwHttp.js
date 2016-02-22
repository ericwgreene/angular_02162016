angular.module("WidgetApp.Services")
.factory("vwHttp", function($q) {


	return {
		get: function(url) {

			var d = $q.defer();

			var xhr = new XMLHttpRequest();
			xhr.addEventListener("readystatechange", function() {

				if (xhr.readyState === 1 && xhr.status !== 200) {
					d.reject(xhr);
				}

				if (xhr.readyState === 4 && xhr.status === 200) {
					d.resolve({ data: JSON.parse(xhr.responseText) });
				}

			});

			xhr.open("GET", url);
			xhr.send();

			return d.promise;
		}



	}



})
