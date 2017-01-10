let app = angular.module('app.Directive', []);

app.directive('menuLink',require('./MenuLink.directive.js'))
app.directive('menuToggle',require('./MenuToggle.directive.js'))
app.directive('mdProgress',require('./MdProgress.directive.js'))

module.exports = 'app.Directive';