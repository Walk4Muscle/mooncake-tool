module.exports = function ($mdDialog) {
    return {
        templateUrl: 'public/templates/issue-table-in-card.tmpl.html',
        scope: {
            list: '='
        },
        link: (scope, e, a) => {
            scope.data = scope.list;
            // scope.showUTDialog = (ev, params) => {
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
        },
        controller: 'IssueCtrl'
    }
}