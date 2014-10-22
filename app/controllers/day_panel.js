var app = angular.module('calendar');

app.controller('DayPanelController', ['$scope', function($scope) {
	$scope.add_task_state = false;

	$scope.show_add_task = function() {
		$scope.add_task_state = true;
	};

	$scope.cancel_add_task = function() {
		$scope.add_task_state = false;
	};
}]);
