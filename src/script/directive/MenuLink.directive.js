module.exports = function () {
    return {
        templateUrl: 'public/templates/menu-link.tmpl.html',
        scope: {
            section: '='
        },
        link: (scope, e, a) => {
            var controller = e.parent().controller('mdContent').$scope;

            scope.isSelected = () => {
                return controller.isSelected(scope.section);
            };
            scope.selectPage = () => {
                return controller.selectPage(scope.section);
            }
            scope.focusSection = () => {
                // set flag to be used later when
                // $locationChangeSuccess calls openPage()
                controller.autoFocusContent = true;
            };
        }
    }
}