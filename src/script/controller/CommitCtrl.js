module.exports = function ($scope, $rootScope, $stateParams, $timeout, $interval, $mdToast, $mdDialog, CONST, API) {
	// fix files update
	// $scope.products = products
	// $scope.platforms = platforms
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
			type: 'commit'
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
			type: 'commit'
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
		API.Commit.query({
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

	$scope.openMenu = ($mdOpenMenu, evt) => {
		$mdOpenMenu(evt);
	}

	$scope.changeIssueStauts = (entity, status) => {
		let data = {
			FkId: entity.id,
			ProcessName: status,
			Type:'commit'
		}
		API.Process.save(data).$promise.then((res) => {
			console.log(res);
			if (res.StatusCode === 200) {
				entity.Process = status;
			}
		}, (err) => {
			console.log(err)
		})
	}
	$scope.initDocument();
	$scope.$on('refresh-ut',(evt,args)=>{
		console.log(args)
		args.entity.UT += args.ut;
	})
}