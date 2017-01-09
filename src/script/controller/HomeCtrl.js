module.exports = function ($scope, $timeout,$interval, $mdToast, CONST,ngProgressFactory) {
	// fix files update
	$scope.CONST = CONST.APP_NAME;
	$scope.initDocument = function(){
		$('.collapsible').collapsible();
	}
	$timeout($scope.initDocument,0)
	$scope.determinateValue=0;
	$interval(()=>{
		$scope.determinateValue +=20;
		if($scope.determinateValue > 100) $scope.determinateValue = 0;
	},3000)
	$scope.progressbar = ngProgressFactory.createInstance();
	$scope.progressbar.setParent(document.getElementById('progressBar'));
    $scope.progressbar.start();
}