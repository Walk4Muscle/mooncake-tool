module.exports = function ($rootScope, CONST) {
    return {
        replace: true,
        transclude: true,
        scope: {
            message: "=",
            color: "@",
            status: "="
        },
        // Only use as a element
        restrict: 'E',
        link: (scope, e, a) => {
            let progressBar = e.find('.ngProgress');
            let process_array = $rootScope.process || CONST.PROGRESS_STATUS;
            scope.color = scope.color || CONST.PROCRESS_COLOR[process_array.indexOf(scope.status)] || 'grey-200'
            progressBar.eq(0).css('width', process_array.indexOf(scope.status) * 100/6 + '%');
            // progressBar.eq(0).css('background-color', scope.color);
            // progressBar.eq(0).css('color', scope.color);
            // let test_function = () => {
            //     $interval(() => {
            //         let status = Math.floor(Math.random() * 6)
            //         let color = PROCRESS_COLOR[status];
            //         progressBar.eq(0).css('width', status * 100/6 + '%');
            //         progressBar.eq(0).css('background-color', color);
            //         progressBar.eq(0).css('color', color);
            //     }, 3000)
            // }
            // test_function();

            //for UI design
            scope.$watch('status', (newV) => {
                scope.color = CONST.PROCRESS_COLOR[process_array.indexOf(newV)]|| 'grey-200'
                progressBar.eq(0).css('width', (process_array.indexOf(newV)+1) * 100/6 + '%');
                
                // progressBar.eq(0).css('background-color', color);
                // progressBar.eq(0).css('color', color);
            })
            scope.$watch('message', (newV) => {
            })
            
        },
        templateUrl: 'public/templates/md-progress.tmpl.html',
    }
}