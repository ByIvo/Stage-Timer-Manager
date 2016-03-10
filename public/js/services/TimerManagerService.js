app.factory('TimerManagerService',['TimerService', function(TimerService) {
	var timer = TimerService.new();
	return {
		timer: function() {
			return timer;
		}
	};
}]);