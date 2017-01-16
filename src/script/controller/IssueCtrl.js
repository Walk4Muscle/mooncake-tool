module.exports = function ($scope, $stateParams, $timeout, $interval, $mdToast, $mdDialog, CONST, dataSrv) {
	// fix files update
	$scope.CONST = CONST;
	$scope.initDocument = () => {
		$scope.getPlatform()
	}

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
		dataSrv.platform().then((data) => {
			console.log(data);
		})
	}
	$scope.data = [{
			"html_url": "https://github.com/AzureAD/azure-activedirectory-identitymodel-extensions-for-dotnet/pull/560",
			"title": "Add support for frontchannel_logout_session_supported and frontchanne…",
			"created_at": "2017-01-12T00:22:04Z",
			"updated_at": "2017-01-12T01:41:06Z",
			"body": "…l_logout_supported for 5.x"
		}, {
			"html_url": "https://github.com/AzureAD/azure-activedirectory-identitymodel-extensions-for-dotnet/issues/559",
			"title": "JWT handler and UAP",
			"created_at": "2017-01-11T10:34:51Z",
			"updated_at": "2017-01-12T02:23:05Z",
			"body": "When I reference the JWT handler in a Win10 project I get errors like:\r\n\r\nSeverity\tCode\tDescription\tProject\tFile\tLine\tSuppression State\r\nError\t\tSystem.Security.Cryptography.Csp 4.3.0 provides a compile-time reference assembly for System.Security.Cryptography.Csp on UAP,Version=v10.0, but there is no run-time assembly compatible with win10-x64-aot.\t\t\t0\t\r\n\r\nAny idea what I am doing wrong?"
		}]
		// scope.message = "Not Start";

}