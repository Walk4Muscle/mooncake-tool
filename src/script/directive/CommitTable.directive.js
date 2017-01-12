module.exports = function () {
    return {
        templateUrl: 'public/templates/commit-table-in-card.tmpl.html',
        scope: {
            data: '='
        },
        link: (scope, e, a) => {
            console.log(scope.data)
        }
    }
}