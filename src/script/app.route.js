require('angular-ui-router');
let app = angular.module('app.Route', ['ui.router','app.Constant']);
app
  .config(($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {
  	 $urlRouterProvider.otherwise("code");
  	 $stateProvider
      .state('code', {
        url: '/',
        templateUrl: 'public/templates/home.html',
        controller: 'HomeCtrl'
      })
      .state('commit', {
        url: '/commit',
        templateUrl: 'public/templates/commit.html',
        controller: 'CommitCtrl'
      })
      .state('issue', {
        url: '/issue',
        templateUrl: 'public/templates/issue.html',
        controller: 'IssueCtrl'
      })
      // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .run(($rootScope,menu)=>{
    $rootScope.$on('$stateChangeStart',(e, toState, toParams, fromState, fromParams)=>{
      menu.loadPage(toState.name)
    })
  })

module.exports = 'app.Route';