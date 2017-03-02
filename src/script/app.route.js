require('angular-ui-router');
let app = angular.module('app.Route', ['ui.router','app.Constant']);
app
  .config(($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {
  	 $urlRouterProvider.otherwise("/");
  	 $stateProvider
      .state('code', {
        url: '/',
        templateUrl: 'public/templates/home.html',
        resolve:{
          products : (API) => {
            return API.Product.query().$promise;
          },
          platforms:(API)=>{
            return API.Platform.query().$promise;
          }
        },
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
        // resolve:{
        //   IssueStatus : (API) => {
        //     return API.IssueStatus.query().$promise;
        //   }
        // },
        controller: 'IssueCtrl',
        onEnter:($rootScope, $timeout)=>{
          $timeout(()=>{
            $rootScope.$broadcast('enterIssue')
          })
        }
      })
      // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .run(($rootScope,menu,API)=>{
    API.Process.query().$promise.then((data)=>{
      $rootScope.process = data;
    })
    $rootScope.$on('$stateChangeStart',(e, toState, toParams, fromState, fromParams)=>{
      menu.loadPage(toState.name)
    })
  })

module.exports = 'app.Route';