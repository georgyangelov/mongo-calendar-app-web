var app = angular.module('calendar');

app.directive('calendar', [function() {
    return {
        scope: {},

        controller: 'CalendarController',
        templateUrl: 'app/views/calendar.html'
    };
}]);
