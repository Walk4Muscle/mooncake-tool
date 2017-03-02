module.exports = function ($scope, $rootScope, $stateParams, $timeout, $interval, $mdToast, $mdDialog, CONST, API) {
	// fix files update
	// $scope.products = products
	// $scope.IssueStatus = IssueStatus
	$scope.CONST = CONST;
	$scope.initQueryForm = () => {
		$scope.params = {
			alias: '',
			status: ''
		}
	}
	$scope.clearQuery = () => {
		$scope.initQueryForm();
	}
	$scope.initDocument = () => {
		$scope.initQueryForm();
		$scope.getResultsPage();
	}
	$scope.showUTDialog = $rootScope.showUTDialog;
	// $scope.showUTDialog = (ev) => {
	// 	$mdDialog.show({
	// 		controller: 'UTDialogCtrl',
	// 		templateUrl: '/public/templates/ut-log-dialog.tmpl.html',
	// 		parent: angular.element(document.body),
	// 		targetEvent: ev,
	// 		clickOutsideToClose: true
	// 	})
	// }
	$scope.takeOwnership = (entity) => {
		let params = {
			fkid: entity.id,
			type: 'issue'
		}
		$rootScope.takeOwnership(params).then((res) => {
			console.log(res);
			if (res.$status.toString()[0] == "2") {
				entity.alias = res.support_alias;
				entity.takeToggle = false;
			}
		});
	}

	$scope.releaseOwnership = (entity) => {
		let params = {
			fkid: entity.id,
			type: 'issue'
		}
		$rootScope.releaseOwnership(params).then((res) => {
			console.log(res);
			if (res.$status.toString()[0] == "2") {
				entity.alias = res.support_alias;
				entity.takeToggle = true;
			}
		});
	}

	$scope.getResultsPage = () => {
		$scope.isLoading = true;
		API.IssueViews.query({
			status: $scope.params.status,
			alias: $scope.params.owner
		}).$promise.then((data) => {
			// console.log(data)
			$scope.list = data.result;
			$scope.isLoading = false;
		}, (err) => {
			console.log(err)
		})
	}

	// $scope.callServer = (tableState) => {
	// 		let pagination = (tableState||{}).pagination||{};
	// 		let start = pagination.start || 0;
	// 		let number = pagination.number || 10;
	// 		let page = Math.ceil(start / number) + 1;
	// 		let params = {
	// 			page: page,
	// 			limit: number
	// 		}
	// 		if($scope.params){
	// 			params.status =  $scope.params.status||'';
	// 			params.alias = $scope.params.owner||''
	// 		}
	// 		$scope.isLoading = true;
	// 		API.IssueViews.query(params).$promise.then((data) => {
	// 			$scope.list = data.result;
	// 			tableState.pagination.totalItemCount = data.total;
	// 			tableState.pagination.numberOfPages = Math.ceil(data.total / number);
	// 			$scope.isLoading = false;
	// 		}, (err) => {
	// 			console.log(err);
	// 		})
	// 	}
	// scope.message = "Not Start";
	$scope.openMenu = ($mdOpenMenu, evt) => {
		$mdOpenMenu(evt);
	}
	$scope.changeIssueStauts = (entity, status) => {
		// console.log(entity);
		// console.log(status);
		let data = {
			IssueID: entity.id,
			IssueStatusName: status
		}
		API.IssueStatus.save(data).$promise.then((res) => {
			console.log(res);
			if (res.StatusCode === 200) {
				entity.process = status;
			}
		}, (err) => {
			console.log(err)
		})
	}
	$scope.$on('refresh-ut', (evt, args) => {
		console.log(args)
		args.entity.UT += args.ut;
	})

	$scope.$on('enterIssue', () => {
		$scope.initDocument();
	})
}