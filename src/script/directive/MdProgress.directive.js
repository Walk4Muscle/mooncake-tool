module.exports = function ($interval) {
    return {
        replace: true,
        transclude: true,
        scope: {
            message: "=",
            color: "@",
            status: "@"
        },
        // Only use as a element
        restrict: 'E',
        link: (scope, e, a) => {
            let progressBar = e.find('.ngProgress');
            progressBar.eq(0).css('width', scope.status + '%');
            progressBar.eq(0).css('background-color', scope.color);
            progressBar.eq(0).css('color', scope.color);

            let test_function = () => {
                $interval(() => {
                    let status = Math.floor(Math.random() * 5) * 20
                    let color = 'firebrick';
                    switch (status) {
                        case 0:
                            color = 'firebrick';
                            break;
                        case 20:
                            color = 'orange';
                            break;
                        case 40:
                            color = 'purple';
                            break;
                        case 60:
                            color = 'indigo';
                            break;
                        case 80:
                            color = 'blue';
                            break;
                        case 100:
                            color = 'green';
                            break;
                    }
                    progressBar.eq(0).css('width', status + '%');
                    progressBar.eq(0).css('background-color', color);
                    progressBar.eq(0).css('color', color);
                }, 3000)
            }
            test_function();
        },
        template: '<div class="ngProgress-container"><div class="ngProgress" ng-transclude></div><div class="info">{{message}}</div></div>'
    }
}