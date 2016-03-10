app.controller('StageTimerController', ['$scope', 'TimerService', function($scope, TimerService) {
	TimerService.registerScope($scope);

	$scope.startTimer = TimerService.startTimer;
	$scope.stopTimer = TimerService.stopTimer;
	$scope.restoreTimer = TimerService.restoreTimer;
	$scope.isRunning = TimerService.isRunning;
	$scope.finished = TimerService.finished;

	$scope.stageTime = function() {
		return TimerService.actualStage().stageTime;
	};

	$scope.stageName = function() {
		return TimerService.actualStage().name;
	};

	$scope.autoStart = function() {
		return TimerService.actualStage().autoStart;
	};

}]);