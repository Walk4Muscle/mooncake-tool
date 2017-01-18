module.exports = ($scope, $mdDialog) => {
    $scope.initform = () => {
        $scope.form = {
            ut: 0,
            comment: ''
        }
    }
    $scope.cancel = () => {
        $scope.initform();
        $mdDialog.cancel();
    }
    $scope.submit = () => {
        console.log($scope.utForm)
        $scope.showMask = true;
        setTimeout(()=>{
            $mdDialog.cancel()
        },1000)
    }
}