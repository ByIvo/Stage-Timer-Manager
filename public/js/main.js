var app = angular.module('stage-timer-manager', ['ngRoute', 'timer']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/timerManager', {
		templateUrl: 'partials/stage-timer.html',
		controller: 'StageTimerController'
	});

	$routeProvider.when('/timerConfiguration', {
		templateUrl: 'partials/stage-timer-config.html',
		controller: 'StageConfigurationController'
	});

	$routeProvider.otherwise({
		redirectTo: '/timerConfiguration'
	});
}]);