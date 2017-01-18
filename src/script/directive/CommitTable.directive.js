module.exports = function ($rootScope) {
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
        }
    }
}