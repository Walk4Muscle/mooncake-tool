module.exports = ($scope, $rootScope, params, API, $mdDialog) => {
    $scope.initform = () => {
        $scope.form = {
            ut: 0,
            comment: ''
        }
    }
    $scope.getUtHistory = () => {
        // console.log(params);
        $scope.utLogs = API.UT.query({
            fkid: params.fkid,
            type: params.type
        });
        // console.log($scope.utLogs)
    }
    $scope.getUtHistory();

    $scope.cancel = () => {
        $scope.initform();
        $mdDialog.cancel();
    }
    $scope.submit = () => {
        // console.log(params)
        // console.log($scope.utForm)
        $scope.showMask = true;
        let data = {
            fkid: params.fkid,
            type: params.type,
            comment: $scope.form.comment,
            ut: $scope.form.ut,
            alias: ENGINEER_ALIAS
        }
        API.UT.save(data,(res) => {
                console.log(res);
                $rootScope.$broadcast('refresh-ut',{entity:params.entity,ut:data.ut});
                $mdDialog.cancel()
            },(err)=>{
                console.log(err)
            })
            // setTimeout(() => {
            //     $mdDialog.cancel()
            // }, 1000)
    }
}