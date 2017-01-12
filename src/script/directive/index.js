let app = angular.module('app.Directive', []);

app.directive('menuLink',require('./MenuLink.directive.js'))
app.directive('menuToggle',require('./MenuToggle.directive.js'))
app.directive('mdProgress',require('./MdProgress.directive.js'))
app.directive('myCodeCard',require('./MyCodeCard.directive.js'))
app.directive('commitTableInCard',require('./CommitTable.directive.js'))
app.directive('issueTableInCard',require('./IssueTable.directive.js'))

module.exports = 'app.Directive';