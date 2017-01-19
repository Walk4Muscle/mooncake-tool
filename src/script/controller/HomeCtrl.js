module.exports = function ($scope, $stateParams ,$timeout, $interval, $mdToast, $mdDialog, CONST, API,products,platforms) {
	// fix files update
	$scope.CONST = CONST.APP_NAME;
	$scope.products = products
	$scope.platforms = platforms

	$scope.initQueryForm = () => {
		$scope.project={
			product:'',
			platform:''
		}
	}
	$scope.initDocument = () => {
		// dataSrv.getAcomCode().then((data)=>{
		// 	console.log(data);
		// })
		API.Acomcode.query({page:0,limit:10}).$promise.then((data)=>{
			// console.log(data)
			$scope.AComCode = data;
		})
		$scope.initQueryForm();
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

	$scope.clearQuery = ()=>{
		$scope.initQueryForm();
	}

}