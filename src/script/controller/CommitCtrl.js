module.exports = function ($scope, $stateParams ,$timeout, $interval, $mdToast, $mdDialog, CONST, dataSrv) {
	// fix files update
	console.log($stateParams)
	$scope.CONST = CONST.APP_NAME;
	$scope.initDocument = () => {
		$scope.getPlatform()
	}
	$timeout($scope.initDocument, 0)
	$scope.determinateValue = 0;
	// $scope.progressbar = ngProgressFactory.createInstance();
	// $scope.progressbar.setParent(document.getElementById('progressBar'));
	// $scope.progressbar.start();
	// $scope.progressbar.setColor('firebrick');
	$scope.message = "Not Start";

	$scope.showUTDialog = (ev) => {
		$mdDialog.show({
				controller: 'UTDialogCtrl',
				templateUrl: '/public/templates/ut-log-dialog.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true
			})
	}

	$scope.getPlatform = () => {
		dataSrv.platform().then((data)=>{
			console.log(data);
		})
	}

}