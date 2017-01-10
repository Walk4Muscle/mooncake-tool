let app = angular.module('app.Ctrl', []);

app.controller('HomeCtrl', require('./HomeCtrl'));

app.controller('LeftCtrl', require('./LeftCtrl'));

app.controller('UTDialogCtrl', require('./UTDialogCtrl'));

module.exports = 'app.Ctrl';