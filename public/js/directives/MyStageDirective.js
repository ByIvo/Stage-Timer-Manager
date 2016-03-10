app.directive('myStage', function() {

	return {
		restrict: 'E',
		scope: {
			stage: '=',
			startStage: '&' ,
			isCompleted: '&',
			isActual: '&'
		},
		templateUrl: function() {
			return 'partials/stage-template.html?' + new Date();
		}
	};
});