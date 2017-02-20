module.exports = function ($rootScope,$mdDialog) {
    return {
        templateUrl: 'public/templates/commit-table-in-card.tmpl.html',
        scope: {
            data: '='
        },
        link: (scope, e, a) => {
            scope.openMenu = function($mdOpenMenu, ev) {
                originatorEv = ev;
                $mdOpenMenu(ev);
            };
            scope.showUTDialog = (ev,params) => {
                // console.log(params);
                $mdDialog.show({
                    controller: 'UTDialogCtrl',
                    templateUrl: '/public/templates/ut-log-dialog.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    locals: {
                        params: params
                    },
                })
            }
        }
    }
}