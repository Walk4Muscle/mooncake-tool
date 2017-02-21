module.exports = function ($mdDialog, $interval, $rootScope, API, CONST) {
    return {
        templateUrl: 'public/templates/code-card.tmpl.html',
        replace: true,
        scope: {
            entity: '='
        },
        link: (scope, e, a) => {
            scope.CONST = CONST;
            // scope.showUTDialog = (ev,params) => {
            //     // console.log(params);
            //     $mdDialog.show({
            //         controller: 'UTDialogCtrl',
            //         templateUrl: '/public/templates/ut-log-dialog.tmpl.html',
            //         parent: angular.element(document.body),
            //         targetEvent: ev,
            //         clickOutsideToClose: true,
            //         locals: {
            //             params: params
            //         },
            //     })
            // }
            var HomeCtrl = e.parent().controller('mdContent').$scope;
            scope.queryData = HomeCtrl.queryData;
            scope.takeOwnership = (params) => {
                $rootScope.takeOwnership(params).then((res) => {
                    console.log(res);
                    if (res.$status.toString()[0] == "2") {
                        scope.entity.alias = res.support_alias;
                        scope.takeToggle = false;
                    }
                });
            }

            scope.releaseOwnership = (params) => {
                $rootScope.releaseOwnership(params).then((res) => {
                    console.log(res);
                    if (res.$status.toString()[0] == "2") {
                        scope.entity.alias = res.support_alias;
                        scope.takeToggle = true;
                    }
                });
            }
            scope.showUTDialog = $rootScope.showUTDialog;
            // $interval(() => {
            //     scope.status = Math.floor(Math.random() * 6)
            //     scope.message = CONST.PROGRESS_STATUS[scope.status];
            // }, 3000)

            scope.CommitData = scope.entity.new_commit || [];

            scope.IssueData = scope.entity.new_issue || [];

            scope.$watch('entity.process', (newV, oldV) => {
                if (newV && newV !== oldV) {
                    let data = {
                        processname: newV,
                        fkid: scope.entity.id,
                        type: 'code',
                        alias: ENGINEER_ALIAS
                    }
                    API.Process.save(data, (res) => {
                        if (res.$status.toString()[0] == "2") {
                            scope.status = CONST.PROGRESS_STATUS.indexOf(scope.entity.process)
                        } else {
                            scope.entity.process = oldV
                        }
                    })
                }
            })
        }
    }
}