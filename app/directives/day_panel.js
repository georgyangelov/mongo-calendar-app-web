var app = angular.module('calendar');

app.directive('dayPanel', [function() {
    return {
    	// TODO: Accept date binding
        scope: {},

        controller: 'DayPanelController',
        templateUrl: 'app/views/day_panel.html',

        link: function($scope, element, attributes, controller) {
        }
    };
}]);
