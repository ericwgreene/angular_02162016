(function(angular) {

	controller.$inject = ["$scope", "widgets", "$state", "$q"];

	function controller($scope, widgets, $state, $q) {

		widgets.getAll().then(function(results) {
			$scope.widgets = results.data;
		});

		$scope.editWidget = function(widgetId) {
			$state.go("edit", { widgetId: widgetId });
		};

		$scope.viewWidget = function(widgetId) {
			$state.go("view", { widgetId: widgetId });
		};

		$scope.createWidget = function() {
			$state.go("create");
		};


		try {
			$.ajax({
				success: function() {
					throw Error();
				}
			})
		} catch (err) {
			console.log(err.message);
		}


		// Promise

		// var d = $q.defer();
		// var p = d.promise;
		//
		// setTimeout(function() {
		// 	d.resolve("test");
		// }, 2000);
		//
		// p.then(function() {
		// 	console.log("promise resolved");
		// 	console.log(arguments);
		//
		// 	throw Error("something did not work out right!");
		//
		// 	var d2 = $q.defer();
		//
		// 	setTimeout(function() {
		// 		d2.resolve("test2");
		// 	}, 2000);
		//
		// 	return d2.promise;
		// }).then(function() {
		// 	console.log("promise 2  resolved");
		// 	console.log(arguments);
		// }).catch(function() {
		// 	console.log("promise rejected");
		// 	console.log(arguments);
		// });
		// console.log("waiting...");


		var
			d1 = $q.defer(),
			d2 = $q.defer(),
			d3 = $q.defer(),
			d4 = $q.defer();

		setTimeout(function() {
			console.log("resolve 1");
			d1.resolve();
		}, 2000);

		setTimeout(function() {
			console.log("resolve 2");
			d2.resolve();
		}, 8000);

		setTimeout(function() {
			console.log("reject	 3");
			d3.reject();
		}, 6000);

		setTimeout(function() {
			console.log("resolve 4");
			d4.resolve();
		}, 4000);


		var p5 = $q.all([d1.promise, d3.promise, d4.promise])
			.then(function() {
				console.log("all done");
			}).catch(function() {
				console.log("one failed");
			});

		$q.all([d2.promise,p5])


		





	}

	angular.module("WidgetApp.Controllers")
		.controller("homeCtrl", controller);

})(angular);
