app.controller('StageConfigurationController', ['$scope', 'TimerService', function($scope, TimerService) {
	$scope.stages = TimerService.stages;

	$scope.addNewStage = function() {
		$scope.stages().push(
		{
			name: '',
			autoStart: true
		}
		);
	};

	$scope.removeStage = TimerService.removeStage;
}]);