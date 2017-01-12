module.exports = function ($mdDialog, $interval, CONST) {
    return {
        templateUrl: 'public/templates/code-card.tmpl.html',
        replace: true,
        scope: {
            entity: '='
        },
        link: (scope, e, a) => {
            scope.CONST = CONST;
            scope.showUTDialog = (ev) => {
                $mdDialog.show({
                    controller: 'UTDialogCtrl',
                    templateUrl: '/public/templates/ut-log-dialog.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
            }
            $interval(() => {
                scope.status = Math.floor(Math.random() * 6)
                scope.message = CONST.PROGRESS_STATUS[scope.status];
            }, 3000)
            scope.testCommitData = [{
                "commit": {
                    "author": {
                        "name": "Gary Liu (Wicresoft)",
                        "email": "v-guiliu@microsoft.com",
                        "date": "2017-01-10T13:00:56Z"
                    },
                    "message": "progress bar, ut dialog",
                },
                "html_url": "https://github.com/Walk4Muscle/mooncake-tool/commit/6e3fd98f8242c9c152d473d7aa9d943b08575425",
            }, {
                "sha": "08d6e2da1ad6bfd49fd8cc7bcde54935140f1ec6",
                "commit": {
                    "author": {
                        "name": "Gary Liu (Wicresoft)",
                        "email": "v-guiliu@microsoft.com",
                        "date": "2017-01-09T13:52:49Z"
                    },
                    "message": "update progress bar",
                },
                "html_url": "https://github.com/Walk4Muscle/mooncake-tool/commit/08d6e2da1ad6bfd49fd8cc7bcde54935140f1ec6",
            }]

            scope.testIssueData = [{
                    "html_url": "https://github.com/AzureAD/azure-activedirectory-identitymodel-extensions-for-dotnet/pull/560",
                    "title": "Add support for frontchannel_logout_session_supported and frontchanne…",
                    "created_at": "2017-01-12T00:22:04Z",
                    "updated_at": "2017-01-12T01:41:06Z",
                    "body": "…l_logout_supported for 5.x"
                }, {
                    "html_url": "https://github.com/AzureAD/azure-activedirectory-identitymodel-extensions-for-dotnet/issues/559",
                    "title": "JWT handler and UAP",
                    "created_at": "2017-01-11T10:34:51Z",
                    "updated_at": "2017-01-12T02:23:05Z",
                    "body": "When I reference the JWT handler in a Win10 project I get errors like:\r\n\r\nSeverity\tCode\tDescription\tProject\tFile\tLine\tSuppression State\r\nError\t\tSystem.Security.Cryptography.Csp 4.3.0 provides a compile-time reference assembly for System.Security.Cryptography.Csp on UAP,Version=v10.0, but there is no run-time assembly compatible with win10-x64-aot.\t\t\t0\t\r\n\r\nAny idea what I am doing wrong?"
                }]
                // scope.message = "Not Start";
        }
    }
}