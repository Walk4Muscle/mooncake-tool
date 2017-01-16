let app = angular.module('app.Ctrl', []);

app.controller('HomeCtrl', require('./HomeCtrl'));
app.controller('IssueCtrl', require('./IssueCtrl'));
app.controller('CommitCtrl', require('./CommitCtrl'));

app.controller('LeftCtrl', require('./LeftCtrl'));

app.controller('UTDialogCtrl', require('./UTDialogCtrl'));

module.exports = 'app.Ctrl';