var app = angular.module('stage-timer-manager', ['ngRoute', 'timer']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/timerManager', {
		templateUrl: 'partials/stage-timer.html',
		controller: 'StageTimerController'
	});

	$routeProvider.otherwise({
		redirectTo: '/timerManager'
	});
}]);