var app = angular.module('calendar');

app.controller('DayPanelController', ['$scope', function($scope) {
	$scope.add_task_state = false;

	$scope.show_add_task = function() {
		$scope.add_task_state = true;
	};

	$scope.cancel_add_task = function() {
		$scope.add_task_state = false;
	};

	$scope.tasks = [
		{title: 'MongoDB driver demo application', text: 'Create a frontend for the MongoDB drivers demo applications.', priority: 0},
		{title: 'MongoDB driver demo application', text: 'Create a frontend for the MongoDB drivers demo applications.', priority: 1},
		{title: 'MongoDB driver demo application', text: 'Create a frontend for the MongoDB drivers demo applications.', priority: 2},
		{title: 'MongoDB driver demo application', text: 'Create a frontend for the MongoDB drivers demo applications.', priority: 3},
		{title: 'MongoDB driver demo application', text: 'Create a frontend for the MongoDB drivers demo applications.', priority: 0}
	];
}]);
