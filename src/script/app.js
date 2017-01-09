let app = angular.module('app', [
    require('./controller'), require('./service'), require('./directive'), require('./filter'), require('./app.route.js'), require('./app.constant.js'),
    'ngMaterial', 'ngAnimate', require('angular-sanitize'), require('md-data-table'),
    'ngProgress'
  ])
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      // .accentPalette('blue-grey',{
      //   'hue-1': '50'
      // });
  })
  .run(($rootScope, $mdSidenav, $log, $timeout, CONST, menu) => {
    $rootScope.CONST = CONST;
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
        var context = $scope,
          args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function () {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
  })