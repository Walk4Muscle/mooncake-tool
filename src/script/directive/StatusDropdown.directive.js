module.exports = function ($rootScope,CONST) {
    return {
        templateUrl: 'public/templates/status-dropdown.tmpl.html',
        scope: {
            status: '@'
        },
        link: (scope, e, a) => {
            scope.CONST = CONST;
            scope.color = scope.color || CONST.PROCRESS_COLOR[CONST.PROGRESS_STATUS.indexOf(scope.status)]
            scope.openMenu = function($mdOpenMenu, ev) {
                originatorEv = ev;
                $mdOpenMenu(ev);
            };
        }
    }
}