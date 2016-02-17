(function(angular) {

	"use strict";

	angular.module("WidgetApp", [])
		.controller("HomeCtrl", function($scope, $rootScope) {

			this.someValue = "test";

			$("button").on("click", function() {
				console.log(this.someValue);
			}.bind(this));

			function myFunc() {
				console.log(this);
			}

			myFunc();

			var o = {
				id: 2,
				myFunc: myFunc
			};

			o.myFunc();

			new myFunc();

			o.myFunc.call({ id: 3 });

			console.log(myFunc === o.myFunc);


			// function Person(firstName, lastName) {
			// 	this.firstName = firstName;
			// 	this.lastName = lastName;
			// }
			//
			// Person.prototype.getFullName = function() {
			// 	return this.firstName + " " + this.lastName;
			// }
			//
			// function Student(studentId, firstName, lastName) {
			// 	this._super(firstName, lastName);
			// 	this.studentId = studentId;
			// }
			//
			// Student.prototype = Object.create(Person.prototype);
			// Student.prototype.constructor = Student;
			// Student.prototype._super = Person;
			//
			// Student.prototype.getInfo = function() {
			// 	return this.studentId + " " + this.lastName + ", " + this.firstName;
			// }
			//
			// console.dir(Person);
			// console.dir(Student);
			//
			// var student = new Student("1", "Bob", "Smith");
			// console.log(student.getFullName());
			// console.log(student.getInfo());



		});

})(angular);
