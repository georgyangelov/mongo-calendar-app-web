var app = angular.module('calendar');

app.controller('CalendarController', ['$scope', function($scope) {

    var today = moment();

    $scope.year  = today.year();
    $scope.month = today.month();
    $scope.weeks = [];

    generate_weeks();

    function generate_weeks() {
        var date  = moment([$scope.year, $scope.month]).startOf('week'),
            weeks = [],
            week  = [];

        function push_date(other_month) {
            if (week.length == 7) {
                weeks.push(week);
                week = [];
            }

            week.push({
                other: other_month,
                today: today.year()  == date.year()  &&
                       today.month() == date.month() &&
                       today.date()  == date.date(),
                number: date.date(),
                date: date.clone()
            });

            date.add(1, 'days');
        }

        // Days before start of month
        while (date.month() != $scope.month) {
            push_date(true);
        }

        // Days of month
        while (date.month() == $scope.month) {
            push_date(false);
        }

        // Days after the end of the month
        while (week.length < 7) {
            push_date(true);
        }

        weeks.push(week);

        $scope.weeks = weeks;
    }

}]);
