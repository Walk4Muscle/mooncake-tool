module.exports = function ($scope, $timeout, $mdToast, CONST) {
	// fix files update
	$scope.CONST = CONST.APP_NAME;
	$scope.initDocument = function(){
		$('.collapsible').collapsible();
	}
	$timeout($scope.initDocument,0)
}