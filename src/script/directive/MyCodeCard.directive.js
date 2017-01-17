module.exports = function ($mdDialog, $interval, CONST) {
    return {
        templateUrl: 'public/templates/code-card.tmpl.html',
        replace: true,
        scope: {
            entity: '='
        },
        link: (scope, e, a) => {
            scope.CONST = CONST;
            scope.showUTDialog = (ev) => {
                $mdDialog.show({
                    controller: 'UTDialogCtrl',
                    templateUrl: '/public/templates/ut-log-dialog.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
            }
            // $interval(() => {
            //     scope.status = Math.floor(Math.random() * 6)
            //     scope.message = CONST.PROGRESS_STATUS[scope.status];
            // }, 3000)
            scope.status = CONST.PROGRESS_STATUS.indexOf(scope.entity.process)

            scope.CommitData = scope.entity.new_commit || [];

            scope.IssueData = scope.entity.new_issue || [];
        }
    }
}