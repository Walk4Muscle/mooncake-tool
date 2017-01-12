module.exports = function ($interval) {
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
            console.log(scope);
            let progressBar = e.find('.ngProgress');
            const PROCRESS_COLOR = ['firebrick','gold','#b8e5f9','#2196f3','#48ce1f','green']
            scope.color = scope.color || PROCRESS_COLOR[scope.status]
            progressBar.eq(0).css('width', scope.status * 100/6 + '%');
            progressBar.eq(0).css('background-color', scope.color);
            progressBar.eq(0).css('color', scope.color);
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
                console.log(newV)
                let color = PROCRESS_COLOR[newV]
                progressBar.eq(0).css('width', (newV+1) * 100/6 + '%');
                progressBar.eq(0).css('background-color', color);
                progressBar.eq(0).css('color', color);
            })
            scope.$watch('message', (newV) => {
                console.log(newV)
            })
            
        },
        template: '<div class="ngProgress-container"><div class="ngProgress" ng-transclude></div><div class="info">{{message}}</div></div>'
    }
}