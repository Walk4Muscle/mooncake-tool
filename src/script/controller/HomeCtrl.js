module.exports = function ($scope, $stateParams, $timeout, $interval, $mdToast, $mdDialog, CONST, API, products, platforms) {
	// fix files update
	// $scope.CONST = CONST.APP_NAME;
	// console.log(CONST.PROGRESS_STATUS)
	$scope.products = products
	$scope.platforms = platforms
	$scope.initQueryForm = () => {
		$scope.params = {
			product: '',
			platform: ''
		}
	}
	$scope.AComCode = [];
	$scope.totalCodes = 0;
	$scope.pageNum = 10;
	$scope.currentPage = 1;
	$scope.pagination = {
		current: 1
	};

	$scope.pageChanged = (newPage) => {
		$scope.getResultsPage(newPage);
	};

	$scope.getResultsPage = (pageNumber=1) => {
		$scope.showMask = true;
		API.Acomcode.query({
			page: pageNumber,
			limit: $scope.pageNum,
			product:$scope.params.product,
			platform:$scope.params.platform
		}).$promise.then((data) => {
			// console.log(data)
			$scope.totalCodes = data.total;
			$scope.AComCode = data.result;
			$scope.showMask = false;
		},(err)=>{
			console.log(err)
		})
	}
	$scope.initDocument = () => {
		// dataSrv.getAcomCode().then((data)=>{
		// 	console.log(data);
		// })
		$scope.initQueryForm();
		$scope.getResultsPage(1)
	}
	$scope.initDocument()
		// $scope.determinateValue = 0;
		// $scope.progressbar = ngProgressFactory.createInstance();
		// $scope.progressbar.setParent(document.getElementById('progressBar'));
		// $scope.progressbar.start();
		// $scope.progressbar.setColor('firebrick');


	$scope.queryData = (item,type) => {
		$scope.params[type] = item;
		$scope.getResultsPage(1)
	}

	$scope.clearQuery = () => {
		$scope.initQueryForm();
	}

}