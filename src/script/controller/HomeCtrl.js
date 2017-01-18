module.exports = function ($scope, $stateParams ,$timeout, $interval, $mdToast, $mdDialog, CONST, API) {
	// fix files update
	$scope.CONST = CONST.APP_NAME;
	$scope.getPlatform = () => {
		// dataSrv.platform().then((data)=>{
		// 	console.log(data);
		// })
	}
	$scope.initDocument = () => {
		$scope.getPlatform()
		// dataSrv.getAcomCode().then((data)=>{
		// 	console.log(data);
		// })
		API.Acomcode.query({page:0,limit:10}).$promise.then((data)=>{
			// console.log(data)
			$scope.AComCode = data;
		})
	}
	$scope.initDocument()
	$scope.determinateValue = 0;
	// $scope.progressbar = ngProgressFactory.createInstance();
	// $scope.progressbar.setParent(document.getElementById('progressBar'));
	// $scope.progressbar.start();
	// $scope.progressbar.setColor('firebrick');


	$scope.queryData = () => {
        $scope.showMask = true;
        setTimeout(()=>{
       		$scope.showMask = false;
			$scope.$digest();
        },1000)
    }

}