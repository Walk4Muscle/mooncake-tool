module.exports = function ($scope, $timeout, $interval, $mdToast, $mdDialog, CONST, ngProgressFactory) {
	// fix files update
	$scope.CONST = CONST.APP_NAME;
	$scope.initDocument = () => {
		$('.collapsible').collapsible();
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
			// .then((answer) => {
			// 	console.log('You said the information was "' + answer + '".');
			// }, () => {
			// });
	}
}