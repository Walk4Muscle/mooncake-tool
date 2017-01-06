let app = angular.module('app.Ctrl', []);

app.controller('HomeCtrl', require('./HomeCtrl'));

app.controller('LeftCtrl', require('./LeftCtrl'));

module.exports = 'app.Ctrl';