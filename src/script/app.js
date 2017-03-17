ENGINEER_ALIAS = 'v-jambor';
let app = angular.module('app', [
    require('./controller'), require('./service'), require('./directive'), require('./filter'), require('./app.route.js'), require('./app.constant.js'),
    'ngMaterial', 'ngAnimate', require('angular-sanitize'), require('md-data-table'),
    'ngProgress', 'smart-table', require('./module/ngMarkdown.js'), require('angular-utils-pagination')
  ])
  .config(($mdThemingProvider,paginationTemplateProvider) => {
    paginationTemplateProvider.setPath('public/templates/dirPagination.tpl.html');
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      // .accentPalette('blue-grey',{
      //   'hue-1': '50'
      // });
  })
  .run(($rootScope, $mdSidenav, $mdDialog, $log, $timeout, CONST, API, menu) => {
    $rootScope.CONST = CONST;
    //init for constant value from server
    // API.Process.query().then((data)=>{
    $rootScope.CONST.PROGRESS_STATUS = API.Process.query();
    $rootScope.CONST.ISSUE_STATUS = API.IssueStatus.query();
    // })
    $rootScope.currentUser = sessionStorage.getItem('currentUser');
    $rootScope.toggleLeft = buildDelayedToggler('left');
    $rootScope.menu = menu;
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $rootScope,
          args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function () {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    $rootScope.takeOwnership = (params) => {
      console.log(params);
      console.log(ENGINEER_ALIAS)
      let data = {
        fkid: params.fkid,
        type: params.type,
        support_alias: ENGINEER_ALIAS
      }
      return API.CodeOwner.save(data).$promise
    }
    $rootScope.releaseOwnership = (params) => {
      let data = {
        fkid: params.fkid,
        type: params.type,
        support_alias: null
      }
      return API.CodeOwner.save(data).$promise
    }
    $rootScope.showUTDialog = (ev, params) => {
        // console.log(params);
        $mdDialog.show({
          controller: 'UTDialogCtrl',
          templateUrl: '/public/templates/ut-log-dialog.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          locals: {
            params: params
          },
        })
      }
      // $rootScope.showUTDialog = (ev,params) => {
      //   console.log(params);
      //   $mdDialog.show({
      //       controller: 'UTDialogCtrl',
      //       templateUrl: '/public/templates/ut-log-dialog.tmpl.html',
      //       parent: angular.element(document.body),
      //       targetEvent: ev,
      //       clickOutsideToClose: true
      //     })
      // }

  })