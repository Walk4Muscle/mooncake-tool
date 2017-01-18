module.exports = function (CONST) {
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
            scope.color = scope.color || CONST.PROCRESS_COLOR[CONST.PROGRESS_STATUS.indexOf(scope.status)]
            progressBar.eq(0).css('width', CONST.PROGRESS_STATUS.indexOf(scope.status) * 100/6 + '%');
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
                let color = CONST.PROCRESS_COLOR[CONST.PROGRESS_STATUS.indexOf(newV)]
                progressBar.eq(0).css('width', (CONST.PROGRESS_STATUS.indexOf(newV)+1) * 100/6 + '%');
                // progressBar.eq(0).css('background-color', color);
                // progressBar.eq(0).css('color', color);
            })
            scope.$watch('message', (newV) => {
            })
            
        },
        templateUrl: 'public/templates/md-progress.tmpl.html',
    }
}