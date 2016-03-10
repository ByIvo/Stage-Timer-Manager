app.factory('TimerService', ['$timeout',function($timeout) {
	var $scope;
	var running = false;

	var stages = [
	{
		name: 'Estágio 1',
		stageTime: 3,
		autoStart: false
	},
	{
		name: 'Estágio 2',
		stageTime: 5,
		autoStart: true
	},
	{
		name: 'Estágio 3',
		stageTime: 200,
		autoStart: false
	}
	];

	var actualStage;

	var timerService = {
		registerScope: function(scope) {
			$scope = scope;
		},

		nextStage: function() {
			var index = stages.indexOf(actualStage) + 1;
			
			if(stages.length > index) {
				actualStage = stages[index];
			}
			this.restoreTimer();
		},

		startTimer: function() {
			$scope.$broadcast('timer-start');
			running = true;
		},

		stopTimer: function() {
			$scope.$broadcast('timer-clear');
			running = false;
		},

		restoreTimer: function() {
			$scope.$broadcast('timer-set-countdown-seconds', actualStage.stageTime);
			
			if(actualStage.autoStart) {
				this.startTimer();
			}else {
				this.stopTimer();
			}
		},

		finished: function() {
			$timeout(function() {
				running = false;
				timerService.nextStage();
			}, 1000);
		},

		isRunning: function() {
			return running;
		},

		actualStage: function() {
			if(!actualStage) {
				actualStage = stages[0];
			}

			return actualStage;
		},

		setActualStage: function(newStage) {
			actualStage = newStage;
		}
	};

	return timerService;
}]);